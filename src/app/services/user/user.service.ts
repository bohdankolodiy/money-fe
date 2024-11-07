import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { IUser, IUsersForChat } from '../../shared/interfaces/user.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  #pathUrl: string = environment.API + '/api/v1/';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
  ) {}

  getUser(): Observable<IUser> {
    return this.http.get<IUser>(`${this.#pathUrl}user`).pipe(
      tap((res) => {
        this.setUserCookie(res);
      }),
    );
  }


  getUsersForChat(): Observable<IUsersForChat[]> {
    return this.http.get<IUsersForChat[]>(`${this.#pathUrl}user/forChat`);
  }

  setUserCookie(user: IUser) {
    this.cookieService.set('user', JSON.stringify(user));
  }

  getCookieUser(): IUser {
    const user = this.cookieService.get('user');
    return user ? JSON.parse(user) : '';
  }
}
