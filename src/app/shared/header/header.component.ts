import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  public result:boolean = true;

  constructor(private router: Router, private authService:AuthService){}

  ngOnInit(): void {
    this.verfificacion();
  }

  public verfificacion()
  {
   this.result = this.authService.isLoggedIn();
  }

  public login(){
    this.router.navigate(['/login']);
  }
  public logOut (){
    this.authService.logout();
  }
  public aboutus(){
    this.router.navigate(['/aboutus']);
  }
  public home(){
    this.router.navigate(['/home']);
  }
  public favourites(){
    const id = 'favourites';
    this.router.navigate(['/muscleView',id]);
  }
}
