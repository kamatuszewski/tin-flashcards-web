import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuestionType } from '../../../classes/question-type.class';
import { FlashcardsService } from '../../../../flashcards.service';

@Component({
  selector: 'app-radio-question-type',
  templateUrl: './radio-question-type.component.html',
  styleUrls: ['./radio-question-type.component.scss']
})
export class RadioQuestionTypeComponent extends QuestionType implements OnInit {
  public selectedField(): number | undefined {
    return this.formGroup.get('answer').value;
  }

  constructor(formBuilder: FormBuilder, flashcards: FlashcardsService) {
    super(formBuilder, flashcards);
  }

  ngOnInit(): void {
  }

  public changeValue(id: number): void {
    this.formGroup.get('answer').setValue(id);
    this.isCorrect.emit(this.checkCorrect(id.toString()));
  }

  public checkCorrect(value?: string): boolean {
    if (!value) {
      return false;
    }
    return this.checkAnswers([value]);
  }

  public isSelectedField(id: number): boolean {
    return this.selectedField() === id;
  }
}
