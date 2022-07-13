import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.url !== 'http://127.0.0.1:8000/authentication_token' && request.url !== 'http://127.0.0.1:8000/api/users') {
        const token = localStorage.getItem('jwt');
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        })
    }

    return next.handle(request);
  }
}
