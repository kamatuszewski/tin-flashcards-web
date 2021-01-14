import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './components/label/label.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ErrorComponent } from './components/error/error.component';
import { InputDirective } from './directives/input/input.directive';
import { AlertComponent } from './components/alert/alert.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [
    FormFieldComponent,
    LabelComponent,
    ErrorComponent,
    InputDirective,
    AlertComponent,
    SearchComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule
  ],
  exports: [
    FormFieldComponent,
    LabelComponent,
    ErrorComponent,
    InputDirective,
    AlertComponent,
    SearchComponent,
    SelectComponent
  ]
})
export class ShareModule {}
