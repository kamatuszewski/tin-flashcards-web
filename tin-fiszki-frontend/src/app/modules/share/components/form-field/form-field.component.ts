import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
  @Input() public isAutoHeight = false;
  private _hasError: boolean = false;
  constructor() {
  }

  public set hasError(isError: boolean) {
    this._hasError = isError;
  }

  public get hasError(): boolean {
    return this._hasError;
  }
}
