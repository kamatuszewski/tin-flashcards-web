import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Pagination } from '../../core/interfaces/pagination.interface';
import { ListService } from '../../share/services/list.service';
import { ICategoryResponse } from '../interfaces/category.interface';
import { ICreateCategoryRequest } from '../interfaces/create-category-request.interface';
import { ICreateCategoryResponse } from '../interfaces/create-category-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryManageService extends ListService<ICategoryResponse> {
  private flashcardsUrl: string = environment.flashcards;

  constructor(http: HttpClient) {
    super(http);
  }

  public changeStatus(payload: ICreateCategoryRequest): Observable<ICreateCategoryResponse> {
    const url = `${this.flashcardsUrl}/change-status/`;
    return this.http.put<ICreateCategoryResponse>(url, payload);
  }

  public remove(payload: number): Observable<void> {
    const url = `${this.flashcardsUrl}/remove/${payload}`;
    return this.http.delete<void>(url);
  }

  protected getList(): Observable<Pagination<ICategoryResponse>> {
    const url = `${this.flashcardsUrl}/manage`;
    return this.http.get<Pagination<ICategoryResponse>>(url);
  }
}
