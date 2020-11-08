import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ILoginRequest } from './interfaces/login-request.interface';
import { ILoginResponse } from './interfaces/login-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = environment.auth;

  constructor(private http: HttpClient) {
  }

  public login(payload: ILoginRequest): Observable<ILoginResponse> {
    const url = `${this.auth}/login`;
    return this.http.post(url, payload);
  }
}
