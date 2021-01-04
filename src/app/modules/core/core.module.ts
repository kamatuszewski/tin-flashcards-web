import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { authProviderInjectionInterceptor } from '../auth/interceptors/auth.provider';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavComponent } from './components/nav/nav.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [TopBarComponent, NavComponent],
  imports: [
    CommonModule,
    BrowserModule,
    TranslocoModule,
  ],
  exports: [
    BrowserModule,
    TopBarComponent,
  ],
  providers: [
    authProviderInjectionInterceptor
  ]
})
export class CoreModule {
}
