import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategoryBasic } from '../../interfaces/category-basic.interface';
import { IListOption } from '../../interfaces/list-option.interface';
import { IQuestionBaseBasic } from '../../interfaces/question-base-basic.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() public changeStatus: EventEmitter<ICategoryBasic> = new EventEmitter<ICategoryBasic>();
  @Input() public data: ICategoryBasic[] | IQuestionBaseBasic[];
  @Input() public options?: IListOption;
  @Output() public remove: EventEmitter<number> = new EventEmitter<number>();

  @Output() public selectedItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public selectedId(id: number): void {
    this.selectedItem.emit(id);
  }
}
