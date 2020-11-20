import { Component, OnInit } from '@angular/core';
import { ICategoryBasic } from '../../interfaces/category-basic.interface';
import { questionsMock } from '../../mocks/questions.mock';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public questions: ICategoryBasic[] = questionsMock;
  private categoryId: number;
  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    this.categoryId = +activatedRoute.snapshot.paramMap.get('category');
  }

  ngOnInit(): void {
  }

  public selectQuestion(item: number): void {
    this.router.navigate(['flashcards', this.categoryId, item]).then();
  }
}
