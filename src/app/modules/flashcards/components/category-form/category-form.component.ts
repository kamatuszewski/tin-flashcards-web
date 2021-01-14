import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit, OnDestroy {
  public formGroup: FormGroup;
  private onDestroy$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService) {
    this.initFormGroup();
  }

  public create(): void {
    if (this.formGroup.valid) {
      this.categoryService.createCategory(this.formGroup.value)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe();
    }
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  private initFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      title: this.formBuilder.control(null, [Validators.required])
    })
  }
}
