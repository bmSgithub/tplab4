import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user: User = new User();

  constructor(private authService: AuthService, private router: Router) {}

  public async checkAuthentication() {
    const check = this.authService.checkAuthentication(this.user.email, this.user.password);

    if(await check){
      this.router.navigate(['/home'])
    }
    else
    {
      alert("No existe el usuario");
    }
  }
}
