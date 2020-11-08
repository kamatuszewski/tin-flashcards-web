import {
  Directive,
  DoCheck,
  ElementRef,
  Host,
  OnChanges,
  OnDestroy,
  Optional,
  Self,
  SimpleChanges
} from '@angular/core';
import { FormFieldComponent } from '../../components/form-field/form-field.component';
import { FormGroupDirective, NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appInput]'
})
export class InputDirective implements OnChanges, OnDestroy, DoCheck {
  private stateChanges$: Subject<void> = new Subject<void>();
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    @Host() private parent: FormFieldComponent,
    private elementRef: ElementRef,
    @Optional() private formGroupDirective: FormGroupDirective,
    @Optional() @Self() private ngControl: NgControl) {
    this.stateChanges$.pipe(takeUntil(this.onDestroy$)).subscribe(() => {
      this.changeHasError();
    });
  }

  private changeHasError(): void {
    if (this.formGroupDirective.submitted || this.isInputChanged())
    this.parent.hasError = !this.ngControl.valid;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.stateChanges$.next();
  }

  public ngOnDestroy(): void {
    this.stateChanges$.complete();
  }

  public ngDoCheck(): void {
    if (this.ngControl) {
      this.stateChanges$.next();
    }
  }

  private isInputChanged(): boolean {
    return (this.ngControl.dirty || this.ngControl.touched) && this.ngControl.enabled;
  }
}
