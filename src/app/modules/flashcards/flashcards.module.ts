import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslocoModule } from '@ngneat/transloco';
import { ShareModule } from '../share/share.module';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionComponent } from './components/question/question.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { StatusComponent } from './components/status/status.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';
import { FlashcardsRoutingModule } from './flashcards-routing.module';
import { ProgressComponent } from './components/question/components/progress/progress.component';
import { CheckboxQuestionTypeComponent } from './components/question/components/checkbox-question-type/checkbox-question-type.component';
import { RadioQuestionTypeComponent } from './components/question/components/radio-question-type/radio-question-type.component';
import { TextQuestionTypeComponent } from './components/question/components/text-question-type/text-question-type.component';
import { DragAndDropQuestionTypeComponent } from './components/question/components/drag-and-drop-question-type/drag-and-drop-question-type.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionsFormComponent } from './components/questions-form/questions-form.component';
import { QuestionItemComponent } from './components/questions-form/components/question-item/question-item.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionComponent,
    CategoriesComponent,
    FiltersComponent,
    ListComponent,
    ListItemComponent,
    StatusComponent,
    ProgressComponent,
    CheckboxQuestionTypeComponent,
    RadioQuestionTypeComponent,
    TextQuestionTypeComponent,
    DragAndDropQuestionTypeComponent,
    QuestionsFormComponent,
    QuestionItemComponent,
  ],
  imports: [
    CommonModule,
    FlashcardsRoutingModule,
    TranslocoModule,
    ShareModule,
    ReactiveFormsModule
  ]
})
export class FlashcardsModule { }
