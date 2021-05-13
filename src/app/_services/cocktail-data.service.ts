import { Injectable } from '@angular/core';
import { COCKTAILS, MOCKTAILS } from '../cocktail/mock-cocktail';
import { Cocktail } from '../_model/cocktail.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailDataService {
  private _cocktails = COCKTAILS;
  private _mocktails = MOCKTAILS;

  constructor(private http: HttpClient) { }

  get cocktails$(): Observable<Cocktail[]>{
    return this.http.get(`${environment.apiUrl}/Data/getCocktails`).pipe(
      tap(console.log),
      catchError(this.handleError),
      map((list: any[]): Cocktail[] => list.map(Cocktail.fromJSON))
    );
  }

  get mocktails$(): Observable<Cocktail[]>{
    return this.http.get(`${environment.apiUrl}/Data/getMocktails`).pipe(
      tap(console.log),
      catchError(this.handleError),
      map((list: any[]): Cocktail[] => list.map(Cocktail.fromJSON))
    );
  }

  get cocktails(): Cocktail[]{
    return this._cocktails;
  }

  get mocktails(): Cocktail[]{
    return this._mocktails;
  }

  getCocktailByName(name: string): Cocktail{
    try{
      return this.cocktails.concat(this.mocktails).filter(c => c.name == name)[0];
    }catch(e: any){
      console.log("Error");
      return null;
    }
  }

  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else if (err instanceof HttpErrorResponse) {
      console.log(err);
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = err;
    }
    return throwError(errorMessage);
  }

}
