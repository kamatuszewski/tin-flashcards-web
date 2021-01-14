import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap  } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Pagination } from '../../core/interfaces/pagination.interface';
import { ListService } from '../../share/services/list.service';
import { ICategoryBasic } from '../interfaces/category-basic.interface';
import { ICreateQuestionsRequest } from '../interfaces/create-questions-request.interface';
import { ICreateQuestionsResponse } from '../interfaces/create-questions-response.interface';
import { IQuestionBaseResponse } from '../interfaces/question-base-response.interface';
import { QuestionFormDataResponseType } from '../types/question-form-data-response.type';

@Injectable({providedIn: 'root'})
export class QuestionsService extends ListService<IQuestionBaseResponse> {

  get categoryId(): number {
    return this._categoryId;
  }

  set categoryId(value: number) {
    this._categoryId = value;
  }
  private _categoryId: number;
  private flashcardUrl = environment.flashcards;
  private formDataSubject$ = new BehaviorSubject<QuestionFormDataResponseType>(null);

  constructor(http: HttpClient) {
    super(http);
  }

  public createQuestions(payload: ICreateQuestionsRequest): Observable<ICreateQuestionsResponse> {
    const url = `${this.flashcardUrl}/add-question`;
    return this.http.post<ICreateQuestionsResponse>(url, payload)
  }

  public dispatchFormData(payload: QuestionFormDataResponseType): void {
    this.formDataSubject$.next(payload);
  }

  public getAndDispatchFormData(): void {
    this.getQuestionFormData().pipe(takeUntil(this.onDestroy$)).subscribe((data: ICategoryBasic[]) => this.dispatchFormData(data));
  }

  public getFormData(): QuestionFormDataResponseType {
    return this.formDataSubject$.getValue();
  }

  public getQuestionFormData(): Observable<QuestionFormDataResponseType> {
    const url = `${this.flashcardUrl}/question-form-data`;
    return this.http.get<QuestionFormDataResponseType>(url);
  }

  public selectFormData(): Observable<QuestionFormDataResponseType> {
    return this.formDataSubject$.asObservable();
  }

  protected getList(): Observable<Pagination<IQuestionBaseResponse>> {
    const url = `${this.flashcardUrl}/${this.categoryId}`;
    return this.http.get<Pagination<IQuestionBaseResponse>>(url);
  }
}
