import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '../services/auth/loginGuard/login.guard';
import { LogoutGuard } from '../services/auth/logoutGuard/logout.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent, canActivate:[LoginGuard]},
  {path:'login', component:LoginComponent, canActivate:[LogoutGuard]},
  {path:'signup', component:SignupComponent, canActivate:[LogoutGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
