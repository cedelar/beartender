import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { COCKTAILBOXES } from '../cocktailbox/mock-cocktailbox';
import { Cocktailbox } from '../_model/cocktailbox.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailboxDataService {
  private _cocktailboxes = COCKTAILBOXES;

  constructor(private http: HttpClient) { }

  get cocktailboxes(): Cocktailbox[]{
    return this._cocktailboxes;
  }

  get cocktailboxes$(): Observable<Cocktailbox[]>{
    return this.http.get(`${environment.apiUrl}/Data/getCocktailboxes`).pipe(
      tap(console.log),
      catchError(this.handleError),
      map((list: any[]): Cocktailbox[] => list.map(Cocktailbox.fromJSON))
    );
  }

  getCocktailboxByName(name: string): Cocktailbox{
    try{
      return this.cocktailboxes.filter(c => c.name == name)[0];
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
