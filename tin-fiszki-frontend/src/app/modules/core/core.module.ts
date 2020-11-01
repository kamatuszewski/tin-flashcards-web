import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavComponent } from './components/nav/nav.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [TopBarComponent, SearchComponent, NavComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TranslocoModule,
  ],
  exports: [
    BrowserModule,
    TopBarComponent,
  ]
})
export class CoreModule {
}
