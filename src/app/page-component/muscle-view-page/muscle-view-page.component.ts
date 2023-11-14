import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ExerciseInfo } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { ExerciseService } from 'src/app/core/services/exercise.service';

@Component({
  selector: 'app-muscle-view-page',
  templateUrl: './muscle-view-page.component.html',
  styleUrls: ['./muscle-view-page.component.css']
})

export class MuscleViewPageComponent implements OnInit{
  public id: number = 0;
  public basesId: number[] = []
  public exerciseInfoArray: ExerciseInfo[] = [];
  public loading: boolean = true;

  constructor(private router: Router, private exerciseService: ExerciseService, private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== 'favourites') {
        this.id = +idParam!;
        this.getExerciseBase();
      }
     else {
        this.getFavourites();  
     }
    });
    
  }

  public async getExerciseBase() {
    try {
      const exerciseIds = await this.exerciseService.getExerciseBase(this.id);
      console.log(exerciseIds);
      this.basesId = exerciseIds;
      this.getExerciseInfoArray();
      setTimeout(() => {
        this.loading = false;
      }, 1200);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  private getExerciseInfoArray() {
    this.exerciseService.getExerciseInfoArray(this.basesId).subscribe({
      next: (exerciseInfoArray: ExerciseInfo[]) => {
        console.log(exerciseInfoArray);
        this.exerciseInfoArray = exerciseInfoArray;
      },
      error: (error) => {
        console.error('An error occurred:', error);
      }
    });
  }

  public async getFavourites() {
    try {
      const exerciseIds = await lastValueFrom(this.apiService.getUserFavourites());
      console.log(exerciseIds);
      this.basesId = exerciseIds;
      this.getExerciseInfoArray();
      setTimeout(() => {
        this.loading = false;
      }, 1200);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async toggleFavorite(exerciseInfo: ExerciseInfo): Promise<void> {
    const oldStatus = exerciseInfo.favourite;
    const userFavourites = await lastValueFrom(this.apiService.getUserFavourites());
    console.log(userFavourites.length);
    
    console.log(`${userFavourites} get`);
    if (oldStatus === false) {
      if(userFavourites.length < 9)
      {
        userFavourites.push(exerciseInfo.exercise_base);
        console.log(`${userFavourites} push`);
        exerciseInfo.favourite = !exerciseInfo.favourite;
      }
      else
      {
        exerciseInfo.favourite = exerciseInfo.favourite;
        alert("Can't have more than 9 favourites!");
      }
    } else {
      const indexToRemove = userFavourites.indexOf(exerciseInfo.exercise_base);
      if (indexToRemove !== -1) {
        userFavourites.splice(indexToRemove, 1);
      }
      console.log(`${userFavourites} remove`);
      exerciseInfo.favourite = !exerciseInfo.favourite;
    }
  
    this.apiService.saveFavourites(userFavourites);
  }
}
