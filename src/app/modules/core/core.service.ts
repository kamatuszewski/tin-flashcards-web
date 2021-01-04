import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private baseUrl = environment.base;

  constructor() { }

  public isApiRequest(request: HttpRequest<unknown>): boolean {
    if (request.url.startsWith('http')) {
      return (
        !!this.baseUrl && !!request.url.startsWith(this.baseUrl)
      )
    }
    return false;
  }
}
