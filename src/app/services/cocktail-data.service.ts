import { Injectable } from '@angular/core';
import { COCKTAILS, MOCKTAILS } from '../cocktail/mock-cocktail';
import { Cocktail } from '../model/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailDataService {
  private _cocktails = COCKTAILS;
  private _mocktails = MOCKTAILS;

  constructor() { }

  get cocktails(): Cocktail[]{
    return this._cocktails;
  }

  get mocktails(): Cocktail[]{
    return this._mocktails;
  }

}
