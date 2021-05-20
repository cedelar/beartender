import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from '../_model/order.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  public dateOffset: number;
  private readonly APIKEY : string = 'AIzaSyB4kLjsfmWm8VZlVckOxJVq2gjS5irIKi0';
  
  constructor(private http: HttpClient) { 
    this.dateOffset = 2;
  }

  get orders$(): Observable<Order[]>{
    return this.http.get(`${environment.apiUrl}/Order/getOrders`).pipe(
      tap(console.log),
      catchError(this.handleError),
      map((list: any[]): Order[] => list.map(Order.fromJSON))
    );
  }

  get ordersByDateoffset$(): Observable<Order[]>{
    return this.http.get(`${environment.apiUrl}/Order/getOrdersByDate/${this.dateOffset}`).pipe(
      tap(console.log),
      catchError(this.handleError),
      map((list: any[]): Order[] => list.map(Order.fromJSON))
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
