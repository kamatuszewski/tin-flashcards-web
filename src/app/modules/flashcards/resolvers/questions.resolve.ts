import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Pagination } from '../../core/interfaces/pagination.interface';
import { ICategoryResponse } from '../interfaces/category.interface';
import { IQuestionBaseResponse } from '../interfaces/question-base-response.interface';
import { CategoryService } from '../services/category.service';
import { QuestionsService } from '../services/questions.service';

@Injectable({providedIn: 'root'})
export class QuestionsResolve implements Resolve<Pagination<IQuestionBaseResponse>> {
  constructor(private questionsService: QuestionsService) {
    // questionsService.categoryId = activatedRoute.data?.category;
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Pagination<IQuestionBaseResponse>> | Promise<Pagination<IQuestionBaseResponse>> | Pagination<IQuestionBaseResponse> {
    this.questionsService.categoryId = +route.paramMap.get('category');
    return this.questionsService.getAndDispatchList();
  }
}
