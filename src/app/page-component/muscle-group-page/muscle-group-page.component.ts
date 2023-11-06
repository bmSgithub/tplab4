import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseInfo } from 'src/app/core/Models';
import { ExerciseService } from 'src/app/core/services/exercise.service';

@Component({
  selector: 'app-muscle-group-page',
  templateUrl: './muscle-group-page.component.html',
  styleUrls: ['./muscle-group-page.component.css']
})
export class MuscleGroupPageComponent implements OnInit{

  public select:boolean | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const parametro = params.get('data');
      
      if(parametro === 'true')
      {
        this.select = true;
      }
      else
      {
        this.select = false;
      }
    })
  }

  public irCardioAbs(categoryId: number) {
    this.router.navigate(["/muscleView", categoryId]);
  }
}
