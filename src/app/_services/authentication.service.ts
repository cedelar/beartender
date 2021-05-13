import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../_model/user.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly _tokenKey = 'currentUser';
  private _user$: BehaviorSubject<User>;
  public redirectUrl: string = null;

  constructor(private http: HttpClient) {
    let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
    if (parsedToken) {
      const expires =
        new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this._tokenKey);
        parsedToken = null;
      }
    }
    if(parsedToken != null){
      this._user$ = new BehaviorSubject<User>(
        User.fromJSON(parsedToken)
      );
      console.log(this.user$.value.toString());
    }else{
      this._user$ = new BehaviorSubject<User>(
        null
      );
      console.log("No user logged in");
    }
  }

  get user$(): BehaviorSubject<User> {
    return this._user$;
  }

  get token(): string {
    const localToken = localStorage.getItem(this._tokenKey);
    return !!localToken ? localToken : '';
  }

  login(email: string, password: string): Observable<boolean> {

    return this.http
    .post(
      `${environment.apiUrl}/Authentication/login`,
      { email, password },
      { responseType: 'text' }
    )
    .pipe(
      map((token: any) => {
        if (token) {
          localStorage.setItem(this._tokenKey, token);
          this._user$.next(User.fromJSON(parseJwt(token)));
          return true;
        } else {
          return false;
        }
      })
    );
  }

  register(
    firstname: string,
    lastname: string,
    email: string,
    street: string,
    number: number,
    postcode: number,
    city: string,
    password: string
  ): Observable<boolean> {

    let numberString = number + "";
    let postcodeString = postcode + "";
    return this.http
      .post(
        `${environment.apiUrl}/Authentication/register`,
        {
          firstname,
          lastname,
          email,
          password,
          street,
          number: numberString,
          postcode: postcodeString,
          city,
          passwordConfirmation: password,
        },
        { responseType: 'text' }
      )
      .pipe(
        map((token: any) => {
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            this._user$.next(User.fromJSON(parseJwt(token)));
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem('currentUser');
      this._user$.next(null);
    }
  }

  checkUserNameAvailability = (email: string): Observable<boolean> => {
    return this.http.get<boolean>(
      `${environment.apiUrl}/Authentication/checkUsername`,
      {
        params: { email },
      }
    );
  };

  checkTokenValidity = (): Observable<boolean> => {
    let token = localStorage.getItem(this._tokenKey);
    return this.http.get<boolean>(
      `${environment.apiUrl}/Authentication/isValid`,
      {
        params: { token },
      }
    );
  };
}

function parseJwt(token: string | null) {
  if (!token) {
    return null;
  }
  const base64Token = token.split('.')[1];
  const base64 = base64Token.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}
