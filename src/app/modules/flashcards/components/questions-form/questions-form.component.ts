import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  private onDestroy$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private questionsService: QuestionsService) {}

  public addQuestion(): void {
    this.formArray?.push(this.getEmptyQuestion());
  }

  public create(): void {
    if (this.formGroup.valid) {
      const payload: ICreateQuestionsRequest = this.formGroup.value;
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

  private getEmptyQuestion(): FormGroup {
    return this.formBuilder.group({
      id: this.formBuilder.control(null),
      title: this.formBuilder.control(null),
    })
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      title: this.formBuilder.control(null, Validators.required),
      description: this.formBuilder.control(null),
      categoryId: this.formBuilder.control(null, Validators.required),
      questions: this.formBuilder.array([])
    })
  }

  private initFormArray(): void {
    this.formArray = this.formGroup.get('questions') as FormArray;
  }
}
