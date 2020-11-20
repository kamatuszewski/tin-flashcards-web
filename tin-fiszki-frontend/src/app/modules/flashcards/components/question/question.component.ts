import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../../interfaces/question.interface';
import { questionMock } from '../../mocks/question.mock';
import { EQuestionType } from '../../enums/question-type.enum';
import { FlashcardsService } from '../../flashcards.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public questionMocks: IQuestion[] = questionMock;
  public questionMock: IQuestion;
  public EQuestionType: typeof EQuestionType = EQuestionType;
  public blockedButton: boolean = false;

  private isCorrect: boolean = false;

  constructor(private flashcards: FlashcardsService, private ac: ActivatedRoute) { }

  public ngOnInit(): void {
    const cos = this.ac.snapshot.paramMap.get('question');
    this.questionMock = this.questionMocks[cos];
  }

  public setAnswer(isCorrect: boolean): void {
    this.isCorrect = isCorrect;
    console.log(isCorrect);
  }

  public checkAnswers(): void {
    this.flashcards.dispatchBlockAnswers(true);
    this.blockedButton = true;
    this.sendAnswers();
  }

  private sendAnswers(): void {
    console.log('Poprawnie?: ', this.isCorrect);
    this.flashcards.sendAnswersOnQuestion({}).subscribe(() => {
      console.log('sadasd');
    });
  }
}
