import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './components/label/label.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ErrorComponent } from './components/error/error.component';
import { InputDirective } from './directives/input/input.directive';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [FormFieldComponent, LabelComponent, ErrorComponent, InputDirective, AlertComponent],
  imports: [
    CommonModule
  ],
  exports: [FormFieldComponent, LabelComponent, ErrorComponent, InputDirective, AlertComponent]
})
export class ShareModule {}
