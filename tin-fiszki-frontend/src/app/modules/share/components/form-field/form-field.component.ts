import { Component } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
  // tslint:disable-next-line:variable-name
  private _hasError = false;
  constructor() {
  }

  public set hasError(isError: boolean) {
    this._hasError = isError;
  }

  public get hasError(): boolean {
    return this._hasError;
  }
}