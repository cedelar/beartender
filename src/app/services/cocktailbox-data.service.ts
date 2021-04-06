import { Injectable } from '@angular/core';
import { COCKTAILBOXES } from '../cocktailbox/mock-cocktailbox';
import { Cocktailbox } from '../model/cocktailbox.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailboxDataService {
  private _cocktailboxes = COCKTAILBOXES;

  constructor() { }

  get cocktailboxes(): Cocktailbox[]{
    return this._cocktailboxes;
  }
  
}
