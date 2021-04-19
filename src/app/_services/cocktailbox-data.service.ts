import { Injectable } from '@angular/core';
import { COCKTAILBOXES } from '../cocktailbox/mock-cocktailbox';
import { Cocktailbox } from '../_model/cocktailbox.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailboxDataService {
  private _cocktailboxes = COCKTAILBOXES;

  constructor() { }

  get cocktailboxes(): Cocktailbox[]{
    return this._cocktailboxes;
  }

  getCocktailboxByName(name: string): Cocktailbox{
    try{
      return this.cocktailboxes.filter(c => c.name == name)[0];
    }catch(e: any){
      console.log("Error");
      return null;
    }
  }
  
}
