import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { minLengthArray } from '../../../core/functions/validators.function';
import { EAlert } from '../../../share/enums/alert.enum';
import { IAlert } from '../../../share/interfaces/alert.interface';
import { ToastrService } from '../../../share/services/toastr.service';
import { ICategoryBasic } from '../../interfaces/category-basic.interface';
import { ICreateQuestionsRequest } from '../../interfaces/create-questions-request.interface';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.scss']
})
export class QuestionsFormComponent implements OnInit, OnDestroy {
  // public listenChanged$ = new Subject<void>();
  public alert$: BehaviorSubject<IAlert | void> = new BehaviorSubject<IAlert | null>(null);
  public categoryList: Observable<ICategoryBasic[]> = this.questionsService.selectFormData();
  public formArray: FormArray;
  public formGroup: FormGroup;

  private onDestroy$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
              private questionsService: QuestionsService,
              private toastrService: ToastrService,
              private translocoService: TranslocoService) {
  }

  // public addQuestion(): void {
  //   this.formArray?.push(this.getEmptyQuestion());
  // }

  public create(): void {
    // this.allMarkAsTouched();
    if (this.formGroup.valid) {
      const payload: ICreateQuestionsRequest = this.formGroup.getRawValue();
      this.questionsService.createQuestions(payload).pipe(takeUntil(this.onDestroy$)).subscribe(
        () => {
          this.toastrService.successToastr(this.translocoService.translate('QUESTION.FORM.TOASTR.SUCCESS'));
          this.alert$.next();
        },
        (error: HttpErrorResponse) => {
          const badRequest = 400;
          if (error.status === badRequest) {
            const alert: IAlert = {
              type: EAlert.ERROR,
              text: this.translocoService.translate(`ERRORS.${error.error.message}`)
            };
            this.alert$.next(alert);
          }
        })
    }
}

public ngOnDestroy(): void {
  this.onDestroy$.next();
  this.onDestroy$.complete();
}

public ngOnInit(): void {
  this.initForm();
  // this.initFormArray();
  this.questionsService.getAndDispatchFormData();
}

// public removeQuestion($event: number): void {
//   this.formArray.removeAt($event);
// }

// private allMarkAsTouched(): void {
//   Object.values(this.formGroup.controls).forEach((control: AbstractControl) => {
//     control.markAllAsTouched();
//     this.listenChanged$.next();
//   })
// }

// private getEmptyQuestion(): FormGroup {
//   return this.formBuilder.group({
//     id: this.formBuilder.control(null),
//     title: this.formBuilder.control(null, Validators.required),
//   })
// }

private initForm(): void {
  this.formGroup = this.formBuilder.group({
    title: this.formBuilder.control(null, Validators.required),
    description: this.formBuilder.control(null),
    categoryId: this.formBuilder.control(null, Validators.required),
    // questions: this.formBuilder.array([], minLengthArray(2))
  })
}

// private initFormArray(): void {
//   this.formArray = this.formGroup.get('questions') as FormArray;
// }

}
