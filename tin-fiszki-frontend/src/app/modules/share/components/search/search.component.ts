import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() public search: EventEmitter<string> = new EventEmitter<string>();
  public formGroup: FormGroup;
  public searchSubject$: Subject<string> = new Subject<string>();

  private onDestroy$: Subject<void> = new Subject<void>();
  private debounceTime: number = 700;

  constructor(private formBuilder: FormBuilder) {
    this.searchSubject$.pipe(
      takeUntil(this.onDestroy$),
      debounceTime(this.debounceTime),
      distinctUntilChanged()
    ).subscribe(
      (value: string): void => this.search.emit(value)
    );
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm = (): void => {
    this.formGroup = this.formBuilder.group({
      search: this.formBuilder.control(null)
    });
  }

  public changeSearch = (): void => {
    this.searchSubject$.next(this.formGroup.get('search').value);
  }
}
