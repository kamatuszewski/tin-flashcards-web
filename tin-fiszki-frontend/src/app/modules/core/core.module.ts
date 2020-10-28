import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [TopBarComponent, SearchComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports: [
    BrowserModule,
    TopBarComponent,
  ]
})
export class CoreModule {
}
