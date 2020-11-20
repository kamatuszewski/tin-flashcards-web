import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ILoginRequest } from './interfaces/login-request.interface';
import { ILoginResponse } from './interfaces/login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: string = environment.auth;

  constructor(private http: HttpClient) {
  }

  public login(payload: ILoginRequest): Observable<ILoginResponse> {
    const url: string = `${this.auth}/login`;
    return this.http.post(url, payload);
  }
}
