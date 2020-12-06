import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FlashcardsService } from '../../../../flashcards.service';
import { QuestionType } from '../../../classes/question-type.class';

@Component({
  selector: 'app-radio-question-type',
  templateUrl: './radio-question-type.component.html',
  styleUrls: ['./radio-question-type.component.scss']
})
export class RadioQuestionTypeComponent extends QuestionType implements OnInit {

  constructor(formBuilder: FormBuilder, flashcards: FlashcardsService) {
    super(formBuilder, flashcards);
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

  public ngOnInit(): void {
  }

  public selectedField(): number | undefined {
    return this.formGroup.get('answer').value;
  }
}
