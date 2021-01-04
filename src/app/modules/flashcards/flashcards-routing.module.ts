import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyForLoggedInGuard } from '../auth/guards/only-for-logged-in.guard';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionsFormComponent } from './components/questions-form/questions-form.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: ':category',
    component: QuestionsComponent
  },
  {
    path: ':category/:question',
    component: QuestionComponent
  },
  {
    path: 'questions/form/create',
    component: QuestionsFormComponent,
    canActivate: [OnlyForLoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlashcardsRoutingModule { }
