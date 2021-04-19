import { Injectable } from '@angular/core';
import { COCKTAILS, MOCKTAILS } from '../cocktail/mock-cocktail';
import { Cocktail } from '../_model/cocktail.model';

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

  getCocktailByName(name: string): Cocktail{
    try{
      return this.cocktails.concat(this.mocktails).filter(c => c.name == name)[0];
    }catch(e: any){
      console.log("Error");
      return null;
    }
  }

}
