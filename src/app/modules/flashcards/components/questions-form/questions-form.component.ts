import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { minLengthArray } from '../../../core/functions/validators.function';
import { ICategoryBasic } from '../../interfaces/category-basic.interface';
import { ICreateQuestionsRequest } from '../../interfaces/create-questions-request.interface';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.scss']
})
export class QuestionsFormComponent implements OnInit, OnDestroy {
  public categoryList: Observable<ICategoryBasic[]> = this.questionsService.selectFormData();
  public formArray: FormArray;
  public formGroup: FormGroup;
  public listenChanged$ = new Subject<void>();
  private onDestroy$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private questionsService: QuestionsService) {}

  public addQuestion(): void {
    this.formArray?.push(this.getEmptyQuestion());
  }

  public create(): void {
    this.allMarkAsTouched();
    if (this.formGroup.valid) {
      const payload: ICreateQuestionsRequest = this.formGroup.getRawValue();
      console.log(payload);
      this.questionsService.createQuestions(payload).pipe(takeUntil(this.onDestroy$)).subscribe();
    }
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public ngOnInit(): void {
    this.initForm();
    this.initFormArray();
    this.questionsService.getAndDispatchFormData();
  }

  public removeQuestion($event: number): void {
    this.formArray.removeAt($event);
  }

  private allMarkAsTouched(): void {
    Object.values(this.formGroup.controls).forEach((control: AbstractControl) => {
      control.markAllAsTouched();
      this.listenChanged$.next();
    })
  }

  private getEmptyQuestion(): FormGroup {
    return this.formBuilder.group({
      id: this.formBuilder.control(null),
      title: this.formBuilder.control(null, Validators.required),
    })
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      title: this.formBuilder.control(null, Validators.required),
      description: this.formBuilder.control(null),
      categoryId: this.formBuilder.control(null, Validators.required),
      questions: this.formBuilder.array([], minLengthArray(2))
    })
  }

  private initFormArray(): void {
    this.formArray = this.formGroup.get('questions') as FormArray;
  }

}
