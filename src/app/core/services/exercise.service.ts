import { Injectable } from "@angular/core";
import { User } from "../Models";
import { Observable, lastValueFrom, map } from "rxjs";
import { ApiService } from "./api.service";
  
@Injectable({
    providedIn: 'root'
})

export class ExerciseService {

    constructor(private apiService: ApiService){}
    
    public async getExerciseBase(categoryId: number): Promise<number[]> {
        try {
          const categoryData = await lastValueFrom(this.apiService.getCategoryDataByCategoryId(categoryId));
          return this.apiService.getRandomExerciseIds(categoryData, 5);

        } catch (error) {
          console.error('An error occurred:', error);
          return []; 
        }
      }

}