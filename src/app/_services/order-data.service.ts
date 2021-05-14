import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
        isPaid: order.isPaid
      },
      { responseType: 'text' }
    ).pipe(
      map((r: any) => {
        return r;
      })
    )
  }
}

