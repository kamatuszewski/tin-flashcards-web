import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {
  private mainUrl: string = environment.flashcards;
  private blockAnswers$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  public sendAnswersOnQuestion(payload: any): Observable<any> {
    const url: string = `${this.mainUrl}`;
    return this.http.post(url, payload);
  }

  public dispatchBlockAnswers(isBlock: boolean): void {
    this.blockAnswers$.next(isBlock);
  }

  public selectBlockAnswers(): Observable<boolean> {
    return this.blockAnswers$.asObservable();
  }

  public getBlockAnswers(): boolean {
    return this.blockAnswers$.getValue();
  }

  public destroySubjects(): void {
    this.dispatchBlockAnswers(false);
  }
}
