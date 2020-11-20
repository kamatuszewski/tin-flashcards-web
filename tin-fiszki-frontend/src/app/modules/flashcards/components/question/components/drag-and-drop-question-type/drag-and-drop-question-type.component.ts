import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FlashcardsService } from '../../../../flashcards.service';
import { IAnswer } from '../../../../interfaces/answer.interface';
import { QuestionType } from '../../../classes/question-type.class';

@Component({
  selector: 'app-drag-and-drop-question-type',
  templateUrl: './drag-and-drop-question-type.component.html',
  styleUrls: ['./drag-and-drop-question-type.component.scss']
})
export class DragAndDropQuestionTypeComponent extends QuestionType implements OnInit {
  @Input() public answers: IAnswer[];

  constructor(formBuilder: FormBuilder, flashcards: FlashcardsService) {
    super(formBuilder, flashcards);
  }

  ngOnInit(): void {
  }

  protected checkCorrect<T extends string>(value?: T): boolean {
    return false;
  }

}
