import { Component, Input } from '@angular/core';
import { EAlert } from '../../enums/alert.enum';
import { IAlert } from '../../interfaces/alert.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() public status: IAlert | null;

  constructor() { }

  public isError = (): boolean => {
    return !!this.status && this.status?.type === EAlert.ERROR;
  }

  public isSuccess = (): boolean => {
    return !!this.status && this.status?.type === EAlert.SUCCESS;
  }

  public isWarn = (): boolean => {
    return !!this.status && this.status?.type === EAlert.WARN;
  }
}
