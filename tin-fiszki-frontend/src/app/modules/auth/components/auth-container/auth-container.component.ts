import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAuthContent } from '../../interfaces/auth-content.interface';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss']
})
export class AuthContainerComponent {

  @Input() public data: IAuthContent;
  @Output() public redirectTo: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  public makeAction(path: string[]): void {
    this.redirectTo.next(path);
  }
}
