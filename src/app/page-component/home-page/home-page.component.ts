import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

 
 constructor(private router:Router){}

 public irMusculacion()
 {
   this.router.navigate(["/muscleGroup"]);
 }


  public irCardioAbs(categoryId: number) {
    this.router.navigate(["/muscleView", categoryId]);
  }
}
