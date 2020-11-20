import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EAlert } from '../../../share/enums/alert.enum';
import { IAlert } from '../../../share/interfaces/alert.interface';
import { AuthService } from '../../auth.service';
import { loginContent } from '../../config/auth.config';
import { IAuthContent } from '../../interfaces/auth-content.interface';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit, OnDestroy {
  public get login(): AbstractControl | undefined {
    return this.formGroup.get('login');
  }

  public get password(): AbstractControl | undefined {
    return this.formGroup.get('password');
  }

  private static readonly loginMinLength: number = 3;
  private static readonly passwordMinLength: number = 3;

  public alert$: BehaviorSubject<IAlert | void> = new BehaviorSubject<IAlert | null>(null);
  public formGroup: FormGroup;
  public loginContent: IAuthContent = loginContent;

  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private translocoService: TranslocoService,
    private authService: AuthService,
    private router: Router) {
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public redirectTo(path: string[]): void {
    this.router.navigate(path).then();
  }

  public submit(): void {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(
          () => {
            this.alert$.next(null);
            console.log('cos');
          },
          (error: HttpErrorResponse) => {
            const alert: IAlert = {
              type: EAlert.ERROR,
              text: this.translocoService.translate(`AUTH.ERRORS.LOGIN_ERROR`)
            };
            this.alert$.next(alert);
          });
    }
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      login: this.formBuilder.control(null, [Validators.required, Validators.minLength(LogInComponent.loginMinLength)]),
      password: this.formBuilder.control(null, [Validators.required, Validators.minLength(LogInComponent.passwordMinLength)])
    });
  }
}
