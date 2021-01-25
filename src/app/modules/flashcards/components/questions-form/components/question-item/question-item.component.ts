import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent implements OnInit {
  public answers: AbstractControl[] = [];
  @Input() public parentGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  public addAnswer(): void {
    this.answers.push(this.formBuilder.group({
      contents: this.formBuilder.control(null, Validators.required),
      is_correct: this.formBuilder.control(false)
    }))
  }

  ngOnInit(): void {
    this.parentGroup.addControl('answers', this.formBuilder.array(this.answers));
    this.addAnswer();
  }
}
