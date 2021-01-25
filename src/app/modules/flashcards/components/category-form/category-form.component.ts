import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EAlert } from '../../../share/enums/alert.enum';
import { IAlert } from '../../../share/interfaces/alert.interface';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit, OnDestroy {
  public alert$: BehaviorSubject<IAlert | void> = new BehaviorSubject<IAlert | null>(null);
  public formGroup: FormGroup;

  private onDestroy$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private transloco: TranslocoService) {
    this.initFormGroup();
  }

  public create(): void {
    if (this.formGroup.valid) {
      this.categoryService.createCategory(this.formGroup.value)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(
          () => console.log(),
          (error: HttpErrorResponse) => {
            const badRequest = 400;
            if (error.status === badRequest) {
              this.dispatchAlert(EAlert.ERROR, `ERRORS.${error.error.message}`);
            }
          }
        );
    }
  }

  public dispatchAlert(status: EAlert, text: string): void {
    this.alert$.next({
      text: this.transloco.translate(text),
      type: status
    })
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  public ngOnInit(): void {
  }

  private initFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      title: this.formBuilder.control(null, [Validators.required])
    })
  }
}
