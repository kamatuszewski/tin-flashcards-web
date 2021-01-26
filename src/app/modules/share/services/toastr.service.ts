import { Injectable, OnDestroy } from '@angular/core';
import { timer, BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EToastr } from '../enums/toastr.enum';
import { IToastr } from '../interfaces/toastr.interface';

@Injectable({
  providedIn: 'root'
})
export class ToastrService implements OnDestroy {
  private onDestroy$ = new Subject<void>();
  private toastrSubject$ = new BehaviorSubject<IToastr | null>(null);

  constructor() {
  }

  public closeToaster(): void {
    this.toastrSubject$.next(null);
  }

  public errorToastr(text: string): void {
    this.dispatchToastr({type: EToastr.ERROR, text});
  }

  public getToastr(): IToastr | null {
    return this.toastrSubject$.getValue();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public selectToastr(): Observable<IToastr | null> {
    return this.toastrSubject$.asObservable();
  }

  public successToastr(text: string): void {
    this.dispatchToastr({type: EToastr.SUCCESS, text});
  }

  public warningToastr(text: string): void {
    this.dispatchToastr({type: EToastr.WARNING, text});
  }

  private closeForTimeout(): void {
    if (!!this.getToastr()) {
      const source = timer(3000);
      source
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(() => this.closeToaster());
    }
  }

  private dispatchToastr(data: IToastr | null): void {
    this.toastrSubject$.next(data);
    this.closeForTimeout();
  }
}
