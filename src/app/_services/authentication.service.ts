import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../_model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly _tokenKey = 'currentUser';
  private _user$: BehaviorSubject<User>;
  public redirectUrl: string = null;

  //admin
  private readonly _testtoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJBZG1pbiIsImxhc3RuYW1lIjoiQWRtaW5zc29uIiwiZW1haWwiOiJhZG1pbkBhZG1pbnNzb24uZXUiLCJzdHJlZXQiOiJLb3Jlbm1hcmt0IiwibnVtYmVyIjoiMSIsInBvc3Rjb2RlIjoiOTAwMCIsImNpdHkiOiJHZW50IiwiaXNBZG1pbiI6dHJ1ZSwiZXhwIjo0MTEwODczNzA2fQ.gw7DrIRL1koulAAlY7M1EMGfZq_02MoIvRjo2r7KuAk';
  //user
  //private readonly _testtoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJVc2VyIiwibGFzdG5hbWUiOiJVc2Vyc3NvbiIsImVtYWlsIjoidXNlckB1c2Vyc3Nvbi5ldSIsInN0cmVldCI6IlZyaWpkYWdzbWFya3QiLCJudW1iZXIiOiIxIiwicG9zdGNvZGUiOiI5MDAwIiwiY2l0eSI6IkdlbnQiLCJpc0FkbWluIjpmYWxzZSwiZXhwIjo0MTEwODczNzA2fQ.K7B9NEksar0tVllvXVTwVa8BpDLXQSFmgxge4Qvi_EY';

  constructor() {
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
    console.log("Login: " + email + ", " + password);
    localStorage.setItem(this._tokenKey, this._testtoken);
    this._user$.next(User.fromJSON(parseJwt(this.token)))
    return new BehaviorSubject<boolean>(true);
  }

  register(
    firstname: string,
    lastname: string,
    email: string,
    street: string,
    number: string,
    postcode: string,
    city: string,
    password: string
  ): Observable<boolean> {
    console.log(new User(
      firstname,
      lastname,
      email,
      street,
      number,
      postcode,
      city,
      false
    ).toString());
    localStorage.setItem(this._tokenKey, this._testtoken);
    this._user$.next(User.fromJSON(parseJwt(this.token)))
    return new BehaviorSubject<boolean>(true);
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem('currentUser');
      this._user$.next(null);
    }
  }

  checkUserNameAvailability = (email: string): Observable<boolean> => {
    return new BehaviorSubject<boolean>(true);
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
