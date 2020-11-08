import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './components/label/label.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ErrorComponent } from './components/error/error.component';
import { InputDirective } from './directives/input/input.directive';

@NgModule({
  declarations: [FormFieldComponent, LabelComponent, ErrorComponent, InputDirective],
  imports: [
    CommonModule,
  ],
  exports: [FormFieldComponent, LabelComponent, ErrorComponent, InputDirective]
})
export class ShareModule {}
