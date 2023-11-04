import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './auth-component/landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth-component/login/login.component';
import { HomePageComponent } from './page-component/home-page/home-page.component';
import { MuscleGroupPageComponent } from './page-component/muscle-group-page/muscle-group-page.component';
import { MuscleViewPageComponent } from './page-component/muscle-view-page/muscle-view-page.component';
import { RegisterComponent } from './auth-component/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    HomePageComponent,
    MuscleGroupPageComponent,
    MuscleViewPageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
