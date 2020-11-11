import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { IAlert } from '../../../share/interfaces/alert.interface';
import { IAuthContent } from '../../interfaces/auth-content.interface';
import { signupContent } from '../../config/auth.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  public formGroup: FormGroup;
  public alert$: BehaviorSubject<IAlert | null> = new BehaviorSubject<IAlert | null>(null);
  public signupContent: IAuthContent = signupContent;

  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      login: this.formBuilder.control(null, [Validators.required, Validators.minLength(3)]),
      password: this.formBuilder.control(null, [Validators.required, Validators.minLength(3)]),
      repeatPassword: this.formBuilder.control(null, [Validators.required, Validators.minLength(3)]),
      email: this.formBuilder.control(null, [Validators.required, Validators.minLength(3), Validators.email]),
    });
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

  public get email(): AbstractControl | undefined {
    return this.formGroup.get('email');
  }

  public submit(): void {
    this.formGroup.markAllAsTouched();
  }

  public redirectTo(path: string[]): void {
    this.router.navigate(path).then();
  }
}
