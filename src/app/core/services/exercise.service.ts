import { Injectable } from "@angular/core";
import { Observable, forkJoin, from, lastValueFrom} from "rxjs";
import { ApiService } from "./api.service";
import { ExerciseInfo } from "../Models";
  
@Injectable({
    providedIn: 'root'
})

export class ExerciseService {

    constructor(private apiService: ApiService){}
    
    public async getExerciseBase(categoryId: number): Promise<number[]> {
      try {
        const categoryData = await lastValueFrom(this.apiService.getCategoryDataByCategoryId(categoryId));
        
        if (categoryData) {
          return this.apiService.getRandomExerciseIds(categoryData, 6);
        } else {
          console.error('Category data is null.');
          return [];
        }
      } catch (error) {
        console.error('An error occurred:', error);
        return [];
      }
    }
    
      public async getExerciseInfo(baseId: number): Promise<ExerciseInfo> {
        try {
          const exerciseObservable = this.apiService.getExercise(baseId);
          const imageObservable = this.apiService.getExerciseImage(baseId);
          const videoObservable = this.apiService.getExerciseVideo(baseId);
      
          const [exercise, image, video] = await Promise.all([
            lastValueFrom(exerciseObservable),
            lastValueFrom(imageObservable),
            lastValueFrom(videoObservable),
          ]);

          const exerciseInfo = new ExerciseInfo({
            id: exercise.id,
            name: exercise.name,
            exercise_base: exercise.exercise_base,
            description: exercise.description || "Base description",
            category: exercise.category,
            image: image?.image || "Image not available",
            video: video?.video || "Video not available",
          });
      
          return exerciseInfo;
        } catch (error) {
          console.error('An error occurred:', error);
          throw error;
        }
      }
    
    public getExerciseInfoArray(ids: number[]): Observable<ExerciseInfo[]> {
      const observables: Observable<ExerciseInfo>[] = ids.map(id => from(this.getExerciseInfo(id)));
      
      return forkJoin(observables);
    }
}