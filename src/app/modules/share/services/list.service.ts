import { HttpClient } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { of, BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Pagination } from '../../core/interfaces/pagination.interface';
import { IPaginationConfig } from '../interfaces/pagination-config.interface';

export abstract class ListService<T> implements OnDestroy {
  protected defaultPaginationConfig: IPaginationConfig = {
    page: 1,
    limit: 10
  }
  protected onDestroy$ = new Subject<void>();

  private itemsSubject$ = new BehaviorSubject<T[] | null>(null);
  private paginationConfigSubject$ = new BehaviorSubject<IPaginationConfig | null>(null);

  constructor(protected http: HttpClient) {
    this.setDefaultPaginationConfig();
  }

  public dispatchItems(items: T[]): void {
    this.itemsSubject$.next(items);
  }

  public getAndDispatchList(): Observable<Pagination<T>> {
    return this.getList()
      .pipe(
        takeUntil(this.onDestroy$),
        map((data: Pagination<T>) => {
            this.dispatchItems(data.items)
            return data;
        })
      )
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public selectItems(): Observable<T[]> {
    return this.itemsSubject$.asObservable();
  }

  protected abstract getList(): Observable<Pagination<T>>;

  private setDefaultPaginationConfig(): void {
    this.paginationConfigSubject$.next(this.defaultPaginationConfig);
  }
}
