import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { IAuthorizationHeader } from './interfaces/authorization-header.interface';
import { ILoginRequest } from './interfaces/login-request.interface';
import { ILoginResponse } from './interfaces/login-response.interface';
import { IProfileRequest } from './interfaces/profile-request.interface';
import { IProfileResponse } from './interfaces/profile-response.interface';
import { ISignupRequest } from './interfaces/signup-request.interface';
import { ISignupResponse } from './interfaces/signup-response.interface';
import { IToken } from './interfaces/token.interface';
import { IUserLoginData } from './interfaces/user-login-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly ACCESS_TOKEN: string = 'tin_access_token';

  public static accessTokenExists(accessToken?: IToken): boolean {
    return !!accessToken?.token || !!localStorage.getItem(AuthService.ACCESS_TOKEN);
  }

  public static getAuthorizationHeaderObject(authHeader: IToken | null): IAuthorizationHeader {
    return {
      Authorization:  this.stringifyAuthorizationHeader(authHeader)
    }
  }

  public static stringifyAuthorizationHeader(authHeader: IToken | null): string {
    if (!authHeader) {
      return '';
    }
    const authType = 'Bearer';
    return `${authType} ${authHeader.token}`;
  }

  private $tokenSubject = new BehaviorSubject<IToken | null>(null);
  private $userLoginDataSubject = new BehaviorSubject<IUserLoginData | null>(null);
  private auth: string = environment.auth;

  constructor(private http: HttpClient, private router: Router) {
    if (!this.getToken() && !!AuthService.accessTokenExists()) {
      this.dispatchToken({token: localStorage.getItem(AuthService.ACCESS_TOKEN)});
    }
  }

  public getLoginData(): IProfileResponse {
    return this.$userLoginDataSubject.getValue();
  }

  public getProfile(payload: IProfileRequest): Observable<IProfileResponse> {
    const url: string = `${this.auth}/profile`;
    const headers = new HttpHeaders({...AuthService.getAuthorizationHeaderObject({token: payload.access_token})})
    return this.http.get<IProfileResponse>(url, {headers}).pipe(tap((profile: IProfileResponse) => this.dispatchLoginData(profile)));
  }

  public getToken(): IToken | null {
    return this.$tokenSubject.getValue();
  }

  public isAuthorized(): boolean {
    return !!AuthService.accessTokenExists(this.getToken())
  }

  public login(payload: ILoginRequest): Observable<ILoginResponse> {
    const url: string = `${this.auth}/login`;
    return this.http.post<ILoginResponse>(url, payload).pipe(
      mergeMap((token: ILoginResponse) => {
        this.dispatchToken({token: token.access_token});
        return this.getProfile(token).pipe(mergeMap(() => of(token)))
      })
    );
  }

  public logout(): void {
    const removeToken = localStorage.removeItem(AuthService.ACCESS_TOKEN);
    this.dispatchToken(null, false)
    if (!localStorage.getItem(AuthService.ACCESS_TOKEN)) {
      this.router.navigate(['auth', 'log-in']).then();
    }
  }

  public selectLoginData(): Observable<IProfileResponse> {
    return this.$userLoginDataSubject.asObservable();
  }

  public selectToken(): Observable<IToken> {
    return this.$tokenSubject.asObservable();
  }

  public signup(payload: ISignupRequest): Observable<ISignupResponse> {
    const url: string = `${this.auth}/register`;
    return this.http.post<ISignupResponse>(url, payload);
  }

  private dispatchLoginData(data: IProfileResponse): void {
    console.log(data);
    this.$userLoginDataSubject.next({...data});
  }

  private dispatchToken(token: IToken | null, isLocalSave = true): void {
    this.$tokenSubject.next(token);
    if (isLocalSave) {
      localStorage.setItem(AuthService.ACCESS_TOKEN, token.token);
    }
  }

}
