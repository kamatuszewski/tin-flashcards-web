import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { remindPasswordContent } from '../../config/auth.config';
import { IAuthContent } from '../../interfaces/auth-content.interface';

@Component({
  selector: 'app-remind-password',
  templateUrl: './remind-password.component.html',
  styleUrls: ['./remind-password.component.scss']
})
export class RemindPasswordComponent implements OnInit {

  public get email(): AbstractControl | undefined {
    return this.formGroup.get('email');
  }
  public formGroup: FormGroup;
  public remindPasswordContent: IAuthContent = remindPasswordContent;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  public redirectTo(path: string[]): void {
    this.router.navigate(path).then();
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      email: this.formBuilder.control(null, [Validators.required, Validators.minLength(3), Validators.email])
    });
  }
}
