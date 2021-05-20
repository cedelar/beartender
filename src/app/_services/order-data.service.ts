import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from '../_model/order.model';
import { MapParser } from '../_support/mapParser';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
  private _toOrderAmount$: BehaviorSubject<number>;
  private _orderedAmount$: BehaviorSubject<number>;
  private _confirmationState$: BehaviorSubject<boolean>;
  private _boxAmountMap: Map<string, number>;
  private _cocktailAmountMap: Map<string, number>;
  private _glassAmount: number;
  private readonly POSITIONSTACKAPIKEY: string = "37067020c14efea3b459766bc260c536";
  private readonly POSITIONSTACKURL: string = "http://api.positionstack.com/v1/";

  constructor(private http: HttpClient) { 
    this._toOrderAmount$ = new BehaviorSubject<number>(0);
    this._orderedAmount$ = new BehaviorSubject<number>(0);
    this._confirmationState$ = new BehaviorSubject<boolean>(false);
    this._boxAmountMap = new Map();
    this._cocktailAmountMap = new Map();
    this._glassAmount = 0;
  }

  get toOrderAmount$(): BehaviorSubject<number> {
    return this._toOrderAmount$;
  }

  get orderedAmount$(): BehaviorSubject<number> {
    return this._orderedAmount$;
  }

  get confirmationState$(): BehaviorSubject<boolean>{
    return this._confirmationState$;
  }

  get boxAmountMap(): Map<string, number>{
    return this._boxAmountMap;
  }

  get cocktailAmountMap(): Map<string, number>{
    return this._cocktailAmountMap;
  }

  get glassAmount(): number{
    return this._glassAmount;
  }

  set glassAmount(val: number){
    this._glassAmount = val;
  }

  setConfirmationState$(val: boolean){
    this._confirmationState$.next(val);
  }

  updateToOrderAmount(amount: number): void{
    this._toOrderAmount$.next(amount);
  }

  updateOrderedAmount(amount: number): void{
    this._orderedAmount$.next(amount);
  }

  updateAmountMap(key: string, addedAmount: number, kind: string): void{
    //select map
    var toUpdate: Map<string, number>;
    if(kind == "box"){
      toUpdate = this._boxAmountMap;
    }else{
      toUpdate = this._cocktailAmountMap;
    }

    //update map
    if(toUpdate.has(key)){
      var endValue = toUpdate.get(key) + addedAmount;
      if(endValue > 0){
        toUpdate.set(key, endValue);
      }else{
        toUpdate.delete(key);
      }
    }else{
      if(addedAmount >= 0){
        toUpdate.set(key, addedAmount);
      }
    }

    //update observables
    var amountToOrder = 0;
    var amountOrdered = 0;
    for (let value of this._boxAmountMap.values()){
      amountToOrder += value;
    }
    for (let value of this._cocktailAmountMap.values()){
      amountOrdered += value;
    }
    this.updateToOrderAmount(amountToOrder);
    this.updateOrderedAmount(amountOrdered);
  }

  getValueFromMap(key: string, kind: string): number{
    //select map
    var toReturn: Map<string, number>;
    if(kind == "box"){
      toReturn = this._boxAmountMap;
    }else{
      toReturn = this._cocktailAmountMap;
    }

    //return value
    if(toReturn.has(key)){
      return toReturn.get(key);
    }else{
      return 0;
    }
  }

  sendOrderToServer(order: Order): Observable<boolean>{
    return this.http
    .post(
      `${environment.apiUrl}/Order/order`,
      {
        userEmail: order.userEmail,
        isDelivery: order.isDelivery,
        adress: order.adress,
        date: order.date,
        boxMap: MapParser.mapToString(order.boxMap),
        cocktailMap: MapParser.mapToString(order.cocktailMap),
        glassAmount: "" + order.glassAmount,
        price: "" + order.price,
        isPaid: order.isPaid,
        lattitude: "" + order.lattitude,
        longitude: "" + order.longitude
      },
      { responseType: 'text' }
    ).pipe(
      map((r: any) => {
        console.log("Response:" + r)
        return r;
      })
    )
  }

  getCoordinates$(adress : string): Observable<number[]>{
    return this.http.get(
      `${this.POSITIONSTACKURL}forward?access_key=${this.POSITIONSTACKAPIKEY}&query=${adress}&limit=1&output=json`
        ).pipe(
          tap(console.log),
          catchError(this.handleError),
          map((json: any): number[] => [json.data[0].latitude, json.data[0].longitude])
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

