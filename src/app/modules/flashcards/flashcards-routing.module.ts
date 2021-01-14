import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyForLoggedInGuard } from '../auth/guards/only-for-logged-in.guard';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionsFormComponent } from './components/questions-form/questions-form.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { CategoriesResolve } from './resolvers/categories.resolve';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    resolve: {
      Category: CategoriesResolve
    }
  },
  {
    path: ':category',
    component: QuestionsComponent,
  },
  {
    path: ':category/:question',
    component: QuestionComponent
  },
  {
    path: 'category/form/create',
    component: CategoryFormComponent,
    canActivate: [OnlyForLoggedInGuard]
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
