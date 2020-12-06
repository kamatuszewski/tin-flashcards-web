import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.scss']
})
export class QuestionsFormComponent implements OnInit {
  public formArray: FormArray;
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public addQuestion(): void {
    this.formArray?.push(this.getEmptyQuestion());
  }

  public create(): void {
    console.log('asd');
  }

  public ngOnInit(): void {
    this.initForm();
    this.initFormArray();
  }

  private getEmptyQuestion(): FormGroup {
    return this.formBuilder.group({
      id: this.formBuilder.control(null),
      title: this.formBuilder.control(null),
      type: this.formBuilder.control(null),
      answers: this.formBuilder.array([])
    })
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      title: this.formBuilder.control(null, Validators.required),
      description: this.formBuilder.control(null, Validators.required),
      questions: this.formBuilder.array([])
    })
  }

  private initFormArray(): void {
    this.formArray = this.formGroup.get('questions') as FormArray;
  }
}
