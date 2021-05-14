import { Injectable } from '@angular/core';
import { FaqQuestion } from '../_model/faqquestion.model';
import { FAQQUESTIONS } from '../static/faq/mock-faq';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaqDataService {
  constructor(private http: HttpClient) { }

  get faqQuestions$(): Observable<FaqQuestion[]>{
    return this.http.get(`${environment.apiUrl}/Data/getFaqquestions`).pipe(
      tap(console.log),
      catchError(this.handleError),
      map((list: any[]): FaqQuestion[] => list.map(FaqQuestion.fromJSON))
    );
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
