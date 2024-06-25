import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { IUser } from '../../shared/interfaces/user.interface';
import { ITransferBody } from '../../shared/interfaces/transfers.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  #pathUrl: string = '/api/v1/';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
  ) {}

  getUser(): Observable<IUser> {
    return this.http.get<IUser>(`${this.#pathUrl}/user`).pipe(
      tap((res) => {
        this.cookieService.set('user', JSON.stringify(res));
      }),
    );
  }

  getCookieUser(): IUser {
    return JSON.parse(this.cookieService.get('user'));
  }

  depositMoney(body: ITransferBody): Observable<unknown> {
    return this.http.put(`${this.#pathUrl}/user/deposit`, body);
  }

  withdrawalMoney(body: ITransferBody): Observable<unknown> {
    return this.http.put(`${this.#pathUrl}/user/deposit`, body);
  }
}
