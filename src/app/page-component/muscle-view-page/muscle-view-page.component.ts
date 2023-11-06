import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseInfo } from 'src/app/core/Models';
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

  constructor(private router: Router, private exerciseService: ExerciseService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam;
        this.getExerciseBase();
      }
    });
  }

  public async getExerciseBase() {
    try {
      const exerciseIds = await this.exerciseService.getExerciseBase(this.id);
      console.log(exerciseIds);
      this.basesId = exerciseIds;
      this.getExerciseInfoArray();
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





}
