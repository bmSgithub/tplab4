import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public verificado:boolean = false;

  formulario: FormGroup = this.formsBuilder.group({
    userName: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(3)]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.pattern(/[\d!@#$%^&*(),.?":{}|<>]/), Validators.minLength(3)]]
  })


  constructor(private authService: AuthService, private formsBuilder: FormBuilder,private router:Router) { }


  public async verificarCuenta(email: string): Promise<boolean> {

    try {
      const resultado = await this.authService.VerificarCuenta(email);
      if (resultado) {
        return true
      }
    }
    catch (error) {
      console.log(error);
    }

    return false;

  }

  public async verificarCuenta2(username: string): Promise<boolean> {

    try {
      const resultado = await this.authService.VerificarCuenta2(username);
      if (resultado) {
        return true
      }
    }
    catch (error) {
      console.log(error);
    }

    return false;

  }

  public async verUsuario() {

    if (!this.formulario.valid) return

    let user: User = this.CargarUser();

    try {
      if (await this.verificarCuenta(user.email!) && await this.verificarCuenta2(user.userName!)) {
         this.verificado = false;
          const result = await this.authService.AddUser(user);
          alert("Usuario agregado con exito");
          this.router.navigate(["/home"]);
      }
      else
      {
        this.verificado = true;
      }
    }
    catch (error) {
      console.log(error);
    }


  }

  private CargarUser(): User {
    const user: User = {
      id: 0,
      userName: this.formulario.controls['userName'].value,
      email: this.formulario.controls['email'].value,
      password: this.formulario.controls['password'].value,
      favourites: []
    }

    return user;
  }
}
