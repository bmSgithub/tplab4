import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muscle-group-page',
  templateUrl: './muscle-group-page.component.html',
  styleUrls: ['./muscle-group-page.component.css']
})
export class MuscleGroupPageComponent {
  constructor(private router:Router){}


 public irCardioAbs()
 {
   this.router.navigate(["/muscleView"]);
 }
   
}
