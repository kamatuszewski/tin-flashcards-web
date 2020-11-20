import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FlashcardsService } from '../../../../flashcards.service';
import { IAnswer } from '../../../../interfaces/answer.interface';
import { QuestionType } from '../../../classes/question-type.class';

@Component({
  selector: 'app-checkbox-question-type',
  templateUrl: './checkbox-question-type.component.html',
  styleUrls: ['./checkbox-question-type.component.scss']
})
export class CheckboxQuestionTypeComponent extends QuestionType implements OnInit {
  private selected: string[] = [];

  constructor(formBuilder: FormBuilder, flashcards: FlashcardsService) {
    super(formBuilder, flashcards);
  }

  public changeValue(answerId: number, checked: boolean): void {
    if (checked) {
      this.selected.push(answerId.toString());
    } else {
      this.selected = this.selected.filter((value: string): boolean => value !== answerId.toString());
    }
    this.checkAnswerCorrect();
  }

  public checkCorrect(value?: string): boolean {
    if (!this.answers?.length) {
      return false;
    }
    return this.answers.some((answer: IAnswer): boolean => answer.id === +value && answer.is_correct);
  }

  public isSelectedField(id: number): boolean {
    if (!this.selected.length) {
      return false;
    }
    return this.selected.includes(id.toString());
  }

  public ngOnInit(): void {
  }

  private checkAnswerCorrect(): void {
    const corrected: boolean = this.checkAnswers(this.selected);
    this.isCorrect.emit(corrected);
  }
}
