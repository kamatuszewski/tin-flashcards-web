import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EListItemActionType } from '../../enums/list-item-action-type.enum';
import { EStatus } from '../../enums/status.enum';
import { ICategoryBasic } from '../../interfaces/category-basic.interface';
import { IListOption } from '../../interfaces/list-option.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Output() public changeStatus: EventEmitter<ICategoryBasic> = new EventEmitter<ICategoryBasic>();
  @Input() public data: ICategoryBasic;
  public eListItemActionType = EListItemActionType;
  public eStatus = EStatus;
  @Output() public getSelected: EventEmitter<number> = new EventEmitter<number>();
  @Input() public options?: IListOption;
  @Output() public remove: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  public action(actionType: EListItemActionType, event: MouseEvent): void {
    event.preventDefault();

    switch (actionType) {
      case EListItemActionType.CHANGE_STATUS:
        this.data.status = this.data.status === EStatus.PRIVATE ? EStatus.PUBLIC : EStatus.PRIVATE;
        this.changeStatus.emit(this.data); return;
      case EListItemActionType.REMOVE: this.remove.emit(this.data.id_category); return;
    }
  }

  public select = (): void => {
    this.getSelected.emit(this.data.id_category);
  }
}
