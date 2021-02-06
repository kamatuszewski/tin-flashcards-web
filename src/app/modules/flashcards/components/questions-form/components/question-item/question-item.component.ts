import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { minLengthArray } from '../../../../../core/functions/validators.function';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent implements OnInit, OnDestroy {
  public formArray: FormArray;
  @Input() public index: number;
  @Input() public parentGroup: FormGroup;
  @Input() public parentListenChanged: Subject<void>;
  @Output() public remove = new EventEmitter<number>();
  private onDestroy$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private changeDetector: ChangeDetectorRef) {

  }

  public addAnswer(): void {
    this.formArray.push(this.formBuilder.group({
      contents: this.formBuilder.control(null, Validators.required),
      is_correct: this.formBuilder.control({value: !this.formArray.controls?.length, disabled: true})
    }))
  }

  public initFormArray(): void {
    this.formArray = this.formBuilder.array([], minLengthArray(2));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngOnInit(): void {
    this.allMarkAsTouched();
    this.initFormArray();
    this.parentGroup.addControl('answers', this.formArray);
  }

  public removeAnswer(index: number): void {
    this.formArray.removeAt(index);
    const firstItem = 0;
    if(index === firstItem) {
      this.formArray.at(firstItem).get('is_correct').setValue(true);
      this.formArray.at(firstItem).get('is_correct').updateValueAndValidity();
    }
  }

  public removeQuestion(): void {
    this.remove.emit(this.index);
  }

  private allMarkAsTouched(): void {
    this.parentListenChanged.pipe(takeUntil(this.onDestroy$)).subscribe(() => {
      this.changeDetector.detectChanges()
    })
  }
}
