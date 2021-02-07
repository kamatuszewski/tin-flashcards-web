import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { throwError, Observable, Subject } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
import { CoreService } from '../../core/core.service';
import { AuthService } from '../auth.service';
import { IToken } from '../interfaces/token.interface';

export class AuthInterceptor implements HttpInterceptor, OnDestroy {
  private $onDestroy = new Subject<void>();
  private sessionToken: IToken = {token: null};

  constructor(private authService: AuthService, private coreService: CoreService) {
    authService.selectToken()
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((token: IToken) => this.sessionToken = token)
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!!this.coreService.isApiRequest(request) && !!AuthService.accessTokenExists(this.sessionToken)) {
      request = request.clone({
        setHeaders: {...AuthService.getAuthorizationHeaderObject(this.sessionToken)}
      })
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.authService.logout();
        }
        return throwError(err);
      })
    )
  }

  public ngOnDestroy(): void {
    this.$onDestroy.next();
    this.$onDestroy.complete();
  }

}
