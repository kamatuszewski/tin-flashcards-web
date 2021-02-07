import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EQuestionType } from '../../enums/question-type.enum';
import { FlashcardsService } from '../../flashcards.service';
import { IQuestion } from '../../interfaces/question.interface';
import { questionMock } from '../../mocks/question.mock';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {
  public blockedButton: boolean = false;
  public EQuestionType: typeof EQuestionType = EQuestionType;
  public questionMock: IQuestion;
  public questionMocks: IQuestion[] = questionMock;

  private isCorrect: boolean = false;

  constructor(private flashcards: FlashcardsService, private ac: ActivatedRoute) { }

  public checkAnswers(): void {
    this.flashcards.dispatchBlockAnswers(true);
    this.blockedButton = true;
    this.sendAnswers();
  }

  public ngOnDestroy(): void {
    this.flashcards.destroySubjects();
  }

  public ngOnInit(): void {
    const cos = this.ac.snapshot.paramMap.get('question');
    this.questionMock = this.questionMocks[cos];
  }

  public setAnswer(isCorrect: boolean): void {
    this.isCorrect = isCorrect;
  }

  private sendAnswers(): void {
    this.flashcards.sendAnswersOnQuestion({}).subscribe(() => {
    });
  }
}
