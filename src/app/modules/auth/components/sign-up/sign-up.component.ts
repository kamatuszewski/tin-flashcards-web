import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IAlert } from '../../../share/interfaces/alert.interface';
import { AuthService } from '../../auth.service';
import { signupContent } from '../../config/auth.config';
import { IAuthContent } from '../../interfaces/auth-content.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  public get email(): AbstractControl | undefined {
    return this.formGroup.get('email');
  }

  public get login(): AbstractControl | undefined {
    return this.formGroup.get('login');
  }

  public get password(): AbstractControl | undefined {
    return this.formGroup.get('password');
  }

  public get repeatPassword(): AbstractControl | undefined {
    return this.formGroup.get('repeatPassword');
  }

  public alert$: BehaviorSubject<IAlert | null> = new BehaviorSubject<IAlert | null>(null);
  public formGroup: FormGroup;
  public signupContent: IAuthContent = signupContent;

  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
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
      const {repeatPassword, ...formValue} = this.formGroup.value;
      console.log(formValue);
      this.authService.signup(formValue).pipe(takeUntil(this.onDestroy$)).subscribe(() => console.log('udało sie'))
    }
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      login: this.formBuilder.control(null, [Validators.required, Validators.minLength(3)]),
      password: this.formBuilder.control(null, [Validators.required, Validators.minLength(3)]),
      repeatPassword: this.formBuilder.control(null, [Validators.required, Validators.minLength(3)]),
      email: this.formBuilder.control(null, [Validators.required, Validators.minLength(3), Validators.email]),
    });
  }
}
