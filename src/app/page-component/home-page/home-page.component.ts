import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  public data:boolean | null = null; 

 constructor(private router:Router){}

 public irMusculacion()
 {
   this.data = true;
   this.router.navigate(["/muscleGroup",this.data]);
 }


  public irCardio()
  {
    this.data = false;
    this.router.navigate(["/muscleGroup",this.data]);
  }
}
