import { Component, Input, OnDestroy } from '@angular/core';
import { IAnswer } from '../../../../interfaces/answer.interface';
import { QuestionType } from '../../../classes/question-type.class';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { FlashcardsService } from '../../../../flashcards.service';

@Component({
  selector: 'app-text-question-type',
  templateUrl: './text-question-type.component.html',
  styleUrls: ['./text-question-type.component.scss']
})
export class TextQuestionTypeComponent extends QuestionType implements OnDestroy {
  @Input() public answers: IAnswer[];
  private debounceTime: number = 700;

  constructor(formBuilder: FormBuilder, flashcards: FlashcardsService) {
    super(formBuilder, flashcards);
    this.changed();
  }

  private changed(): void {
    this.formGroup.get('answer')
      .valueChanges
      .pipe(
        takeUntil(this.onDestroy$),
        debounceTime(this.debounceTime),
        distinctUntilChanged()
      )
      .subscribe(
        (value?: string): void => this.isCorrect.next(this.checkCorrect(value))
      );
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public checkCorrect(value?: string): boolean {
    return this.answers?.[0]?.contents === value;
  }
}
