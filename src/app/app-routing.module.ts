import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Homepage/home/home.component';
import { SignInComponent } from './Homepage/sign-in/sign-in.component';



const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'signin', component: SignInComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
