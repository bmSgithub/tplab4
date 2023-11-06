import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseInfo } from 'src/app/core/Models';
import { ExerciseService } from 'src/app/core/services/exercise.service';

@Component({
  selector: 'app-muscle-group-page',
  templateUrl: './muscle-group-page.component.html',
  styleUrls: ['./muscle-group-page.component.css']
})
export class MuscleGroupPageComponent {

  constructor(private router: Router) {}
  
  public irCardioAbs(categoryId: number) {
    this.router.navigate(["/muscleView", categoryId]);
  }
}
