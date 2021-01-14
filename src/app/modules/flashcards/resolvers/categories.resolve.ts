import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Pagination } from '../../core/interfaces/pagination.interface';
import { ICategoryResponse } from '../interfaces/category.interface';
import { CategoryService } from '../services/category.service';

@Injectable({providedIn: 'root'})
export class CategoriesResolve implements Resolve<Pagination<ICategoryResponse>> {
  constructor(private categoryService: CategoryService) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Pagination<ICategoryResponse>> | Promise<Pagination<ICategoryResponse>> | Pagination<ICategoryResponse> {
    return this.categoryService.getAndDispatchList();
  }
}
