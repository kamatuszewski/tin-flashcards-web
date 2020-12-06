import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ILoginRequest } from './interfaces/login-request.interface';
import { ILoginResponse } from './interfaces/login-response.interface';
import { ISignupRequest } from './interfaces/signup-request.interface';
import { ISignupResponse } from './interfaces/signup-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: string = environment.auth;
  private consumers: string = environment.consumers;

  constructor(private http: HttpClient) {
  }

  public login(payload: ILoginRequest): Observable<ILoginResponse> {
    const url: string = `${this.auth}/login`;
    return this.http.post<ILoginResponse>(url, payload);
  }

  public signup(payload: ISignupRequest): Observable<ISignupResponse> {
    const url: string = `${this.consumers}`;
    console.log('sadasd')
    return this.http.post<ISignupResponse>(url, payload);
  }
}
