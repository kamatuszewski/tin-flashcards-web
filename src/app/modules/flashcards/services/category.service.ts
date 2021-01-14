import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Pagination } from '../../core/interfaces/pagination.interface';
import { ListService } from '../../share/services/list.service';
import { ICreateCategoryRequest } from '../interfaces/create-category-request.interface';
import { ICreateCategoryResponse } from '../interfaces/create-category-response.interface';
import { ICategoryResponse } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ListService<ICategoryResponse> {
  private flashcardsUrl: string = environment.flashcards;

  constructor(http: HttpClient) {
    super(http);
  }

  public createCategory(payload: ICreateCategoryRequest): Observable<ICreateCategoryResponse> {
    const url = `${this.flashcardsUrl}`;
    return this.http.post<ICreateCategoryResponse>(url, payload);
  }

  protected getList(): Observable<Pagination<ICategoryResponse>> {
    const url = `${this.flashcardsUrl}`;
    return this.http.get<Pagination<ICategoryResponse>>(url);
  }
}
