import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICategoryBasic } from '../../interfaces/category-basic.interface';
import { IQuestionBaseResponse } from '../../interfaces/question-base-response.interface';
import { questionsMock } from '../../mocks/questions.mock';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public questions: Observable<IQuestionBaseResponse[]> = this.questionService.selectItems();

  private categoryId: number;

  constructor(private router: Router, activatedRoute: ActivatedRoute, private questionService: QuestionsService) {
    this.categoryId = +activatedRoute.snapshot.paramMap.get('category');
  }

  public ngOnInit(): void {
  }

  public selectQuestion(item: number): void {
    this.router.navigate(['flashcards', this.categoryId, item]).then();
  }
}
