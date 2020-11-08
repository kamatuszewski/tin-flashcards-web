import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';
import { AuthService } from '../../auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  private static readonly loginMinLength: number = 3;
  private static readonly passwordMinLength: number = 3;
  public formGroup: FormGroup;

  private onDestroy$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public submit(): void {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(() => console.log('cos'));
    }
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      login: this.formBuilder.control(null, [Validators.required, Validators.minLength(LogInComponent.loginMinLength)]),
      password: this.formBuilder.control(null, [Validators.required, Validators.minLength(LogInComponent.passwordMinLength)])
    });
  }

  public get login(): AbstractControl | undefined {
    return this.formGroup.get('login');
  }

  public get password(): AbstractControl | undefined {
    return this.formGroup.get('password');
  }
}
