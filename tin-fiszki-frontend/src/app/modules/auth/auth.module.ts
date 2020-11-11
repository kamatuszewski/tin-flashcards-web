import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { ShareModule } from '../share/share.module';
import { AuthContainerComponent } from './components/auth-container/auth-container.component';
import { RemindPasswordComponent } from './components/remind-password/remind-password.component';

@NgModule({
  declarations: [SignUpComponent, LogInComponent, AuthContainerComponent, RemindPasswordComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    ShareModule,
  ]
})
export class AuthModule { }
