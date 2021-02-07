import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Pagination } from '../../core/interfaces/pagination.interface';
import { ICategoryResponse } from '../interfaces/category.interface';
import { CategoryManageService } from '../services/category-manage.service';
import { CategoryService } from '../services/category.service';

@Injectable({providedIn: 'root'})
export class CategoryManageResolve implements Resolve<Pagination<ICategoryResponse>> {
  constructor(private categoryManageService: CategoryManageService) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Pagination<ICategoryResponse>> | Promise<Pagination<ICategoryResponse>> | Pagination<ICategoryResponse> {
    return this.categoryManageService.getAndDispatchList();
  }
}
