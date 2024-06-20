import {
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpRequest,
  HttpSentEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { IAuthBody } from '../../shared/interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<IAuthBody>,
    next: HttpHandler,
  ): Observable<HttpEvent<HttpSentEvent | HttpHeaderResponse>> {
    return next.handle(this.addTokenToRequest(req, this.auth.getAccessToken()));
  }

  private addTokenToRequest(
    request: HttpRequest<IAuthBody>,
    token: string,
  ): HttpRequest<IAuthBody> {
    return request.clone({
      setHeaders: {
        authorization: 'Bearer ' + token,
      },
    });
  }
}
