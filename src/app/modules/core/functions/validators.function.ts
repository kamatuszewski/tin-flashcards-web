import { AbstractControl, ValidationErrors } from '@angular/forms';

export const minLengthArray = (min: number): ValidationErrors =>
  (control: AbstractControl): {[key: string]: any} => {
    if (control.value.length >= min) return null;
    return {minLengthArray: true};
  }
