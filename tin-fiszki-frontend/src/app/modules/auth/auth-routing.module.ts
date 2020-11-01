import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
