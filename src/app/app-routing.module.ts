import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './auth-component/landing/landing.component';
import { LoginComponent } from './auth-component/login/login.component';
import { HomePageComponent } from './page-component/home-page/home-page.component';
import { MuscleGroupPageComponent } from './page-component/muscle-group-page/muscle-group-page.component';
import { MuscleViewPageComponent } from './page-component/muscle-view-page/muscle-view-page.component';
import { RegisterComponent } from './auth-component/register/register.component';
import { AboutUsComponent } from './page-component/about-us/about-us.component';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';
import { categoryGuard } from './guards/category.guard';

const routes: Routes = [
  {
    path:'landing',
    component: LandingComponent
  },
  {
    path:'login',
    component: LoginComponent,canActivate:[loginGuard]
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'home',
    component: HomePageComponent,canActivate:[authGuard]
  },
  {
    path:'muscleGroup',
    component: MuscleGroupPageComponent,canActivate:[authGuard]
  },
  {
    path:'muscleView/:id',
    component: MuscleViewPageComponent,canActivate:[authGuard,categoryGuard]
  },
  {
    path:'aboutus',
    component: AboutUsComponent,
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
