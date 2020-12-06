import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {
  private blockAnswers$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private mainUrl: string = environment.flashcards;

  constructor(private http: HttpClient) { }

  public destroySubjects(): void {
    this.dispatchBlockAnswers(false);
  }

  public dispatchBlockAnswers(isBlock: boolean): void {
    this.blockAnswers$.next(isBlock);
  }

  public getBlockAnswers(): boolean {
    return this.blockAnswers$.getValue();
  }

  public selectBlockAnswers(): Observable<boolean> {
    return this.blockAnswers$.asObservable();
  }

  public sendAnswersOnQuestion(payload: any): Observable<any> {
    const url: string = `${this.mainUrl}`;
    return this.http.post(url, payload);
  }
}
