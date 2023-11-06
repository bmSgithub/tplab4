import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './auth-component/landing/landing.component';
import { LoginComponent } from './auth-component/login/login.component';
import { HomePageComponent } from './page-component/home-page/home-page.component';
import { MuscleGroupPageComponent } from './page-component/muscle-group-page/muscle-group-page.component';
import { MuscleViewPageComponent } from './page-component/muscle-view-page/muscle-view-page.component';
import { RegisterComponent } from './auth-component/register/register.component';

const routes: Routes = [
  {
    path:'landing',
    component: LandingComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'home',
    component: HomePageComponent
  },
  {
    path:'muscleGroup',
    component: MuscleGroupPageComponent
  },
  {
    path:'muscleView/:id',
    component: MuscleViewPageComponent
  },
  {
    path: '',
    redirectTo:'landing',
    pathMatch: 'full'
  },
  {
    path:'**',
    component: LandingComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
