import { Component, Input } from '@angular/core';
import { EStatus } from '../../enums/status.enum';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  @Input() public data: EStatus;

  constructor() {
  }

  public isInReview = (): boolean => {
    return this.data === EStatus.IN_REVIEW;
  }

  public isPrivate = (): boolean => {
    return this.data === EStatus.PRIVATE;
  }

  public isPublic = (): boolean => {
    return this.data === EStatus.PUBLIC;
  }
}
