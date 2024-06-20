import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IAuthBody,
  IAuthSuccesRespons,
  IAuthToken,
} from '../../shared/interfaces/auth.interface';
import { Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #pathUrl: string = '/api/v1/';
  #authUrl: string = `${this.#pathUrl}auth`;
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
  ) {}

  registration(body: IAuthBody): Observable<IAuthSuccesRespons> {
    return this.http
      .post<IAuthSuccesRespons>(`${this.#authUrl}/register`, body)
      .pipe(
        tap(() => {
          this.loginRedirect(['/wait-email', '/approveRegistration']);
        }),
      );
  }

  login(body: IAuthBody): Observable<unknown> {
    return this.http.post<IAuthToken>(`${this.#authUrl}/login`, body).pipe(
      tap((res) => {
        const { accessToken } = res as IAuthToken;
        this.cookieService.set('access_token', accessToken);
        this.loginRedirect(['/home']);
      }),
      // switchMap(() => this.http.get(`${this.#pathUrl}/user`)),
      // tap((res) => {
      //   this.cookieService.set('user', JSON.stringify(res));
      // }),
    );
  }

  verifyUser(id: string): Observable<IAuthSuccesRespons> {
    return this.http
      .post<IAuthSuccesRespons>(`${this.#authUrl}/verifyUser`, {
        id,
      })
      .pipe(
        tap(() => {
          this.loginRedirect(['/login']);
        }),
      );
  }

  logout() {
    this.http.post(`${this.#authUrl}/logout`, {}).pipe(
      tap(() => {
        this.deleteCookies();
        this.loginRedirect(['/login']);
      }),
    );
  }

  loginRedirect(params: Array<string>) {
    this.router.navigate(params);
  }

  public getAccessToken(): string {
    const access_token = this.cookieService.get('access_token');
    if (access_token === null) {
      this.deleteCookies();
    }
    return access_token;
  }

  private deleteCookies() {
    localStorage.clear();
    this.cookieService.deleteAll();
  }
}
