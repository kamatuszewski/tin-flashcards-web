import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategoryBasic } from '../../interfaces/category-basic.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() public data: ICategoryBasic[];
  @Output() public selectedItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public selectedId(id: number): void {
    this.selectedItem.emit(id);
  }
}
