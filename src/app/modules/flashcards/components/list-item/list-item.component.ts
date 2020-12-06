import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategoryBasic } from '../../interfaces/category-basic.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() public data: ICategoryBasic;
  @Output() public getSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  public select = (): void => {
    this.getSelected.emit(this.data.id);
  }
}
