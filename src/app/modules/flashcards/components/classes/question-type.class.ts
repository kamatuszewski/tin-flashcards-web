import { EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlashcardsService } from '../../flashcards.service';
import { IAnswer } from '../../interfaces/answer.interface';

export abstract class QuestionType implements OnDestroy {
  public get blockedField(): boolean {
    return this._blockedField;
  }

  public set blockedField(blocked: boolean) {
    this._blockedField = blocked;
  }

  @Input() public answers: IAnswer[];
  public formGroup: FormGroup;
  @Output() public isCorrect: EventEmitter<boolean> = new EventEmitter<boolean>();
  public onDestroy$: Subject<void> = new Subject<void>();

  private _blockedField: boolean = false;

  protected constructor(private formBuilder: FormBuilder,
                        private flashcards: FlashcardsService) {
    this.initForm();
    this.listenChangeBlockAnswers();
  }

  public checkAnswers(values: string[]): boolean {
    if (!values?.length || !this.answers?.length) {
      return false;
    }

    const corrects: IAnswer[] = this.answers.filter((answer: IAnswer): boolean => answer.is_correct);

    if (corrects.length === 1 && values.length === 1) {
      return +corrects[0].id === +values[0];
    }

    if (corrects.length !== values.length) {
      return false;
    }

    return corrects.every((answer: IAnswer): boolean => values.includes(answer.id.toString()));
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
    this.flashcards.destroySubjects();
  }

  protected abstract checkCorrect(value?: string): boolean;

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      answer: this.formBuilder.control(null)
    });
  }

  private listenChangeBlockAnswers(): void {
    this.flashcards.selectBlockAnswers()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((isBlock: boolean): void => {
        this.blockedField = isBlock;
        if (isBlock) {
          this.formGroup.disable({onlySelf: true, emitEvent: true});
        } else {
          this.formGroup.enable({onlySelf: true, emitEvent: true});
        }
      });
  }
}
