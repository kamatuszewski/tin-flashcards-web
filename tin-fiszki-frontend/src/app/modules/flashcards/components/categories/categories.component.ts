import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategoryBasic } from '../../interfaces/category-basic.interface';
import { categoriesMock } from '../../mocks/category.mock';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: ICategoryBasic[] = categoriesMock;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public selectCategory = (item: number): void => {
    this.router.navigate(['flashcards', item]).then();
  }
}
