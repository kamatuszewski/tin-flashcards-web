import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICategoryResponse } from '../../interfaces/category.interface';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: Observable<ICategoryResponse[]> = this.categoryService.selectItems();
  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  public selectCategory = (item: number): void => {
    console.log(item)
    this.router.navigate(['flashcards', item]).then();
  }
}
