import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from '../../../share/services/toastr.service';
import { ICategoryBasic } from '../../interfaces/category-basic.interface';
import { ICategoryResponse } from '../../interfaces/category.interface';
import { IListOption } from '../../interfaces/list-option.interface';
import { CategoryManageService } from '../../services/category-manage.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './category-manage.component.html',
  styleUrls: ['./category-manage.component.scss']
})
export class CategoryManageComponent implements OnInit, OnDestroy {
  public categories: Observable<ICategoryResponse[]> = this.categoryManageService.selectItems();
  public listOption: IListOption = {
    changeStatus: true,
    remove: true
  }
  private onDestroy$ = new Subject<void>();
  constructor(private router: Router,
              private categoryManageService: CategoryManageService,
              private toastrService: ToastrService,
              private transolocoService: TranslocoService) { }

  public changeStatus($event: ICategoryBasic): void {
    this.categoryManageService.changeStatus($event)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(
        () => {
          this.toastrService.successToastr(this.transolocoService.translate('CATEGORY.CHANGE_STATUS.TOASTR.SUCCESS'));
          this.categoryManageService.getAndDispatchList().pipe(takeUntil(this.onDestroy$)).subscribe();
        }, (error: HttpErrorResponse) => {
          if (error.status === 400) {
            this.toastrService.errorToastr(this.transolocoService.translate(`ERRORS.${error.error.message}`));
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngOnInit(): void {
  }

  public remove($event: number): void {
    this.categoryManageService.remove($event)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(
        () => {
          this.toastrService.successToastr(this.transolocoService.translate('CATEGORY.REMOVE.TOASTR.SUCCESS'));
          this.categoryManageService.getAndDispatchList().pipe(takeUntil(this.onDestroy$)).subscribe();
        }, (error: HttpErrorResponse) => {
          if (error.status === 400) {
            this.toastrService.errorToastr(this.transolocoService.translate(`ERRORS.${error.error.message}`));
          }
        }
      );
  }

  public selectCategory = (item: number): void => {
    this.router.navigate(['flashcards', item]).then();
  }
}
