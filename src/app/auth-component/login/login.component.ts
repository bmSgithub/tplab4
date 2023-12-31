import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user: User = new User();
  public verificado:boolean = false;
  public opcion:boolean = true;

  constructor(private authService: AuthService, private router: Router,private formsBuilder: FormBuilder) {}

  formulario: FormGroup = this.formsBuilder.group({
    userName: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(3)]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.pattern(/[\d!@#$%^&*(),.?":{}|<>]/), Validators.minLength(3)]]
  })

  public cambiartoRegister()
  {
    this.opcion = false;
    const miElemento = document.getElementById('imagencita') as HTMLImageElement;
    if (miElemento) {
     miElemento.src ="assets/images/landing/register.png" ;
   }
   const texto=document.getElementById("textito");
   if(texto){
     texto.innerHTML="First Time?";
   }
  }

  public cambiartoLogin()
  {
     this.opcion = true;
     const miElemento = document.getElementById('imagencita') as HTMLImageElement;
     if (miElemento) {
      miElemento.src ="assets/images/landing/login.png";
    }
    const texto=document.getElementById("textito");
    if(texto){
      texto.innerHTML="Welcome Back";
    }
  }

  iniciarSession() {

    this.authService.verificarEmailYPass(this.user.email,this.user.password)
  }

//#region Register
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
          await this.authService.AddUser(user);
          alert("Usuario agregado con exito");
          location.reload();
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

//#endregion


}
