import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/model/cocktail.model';
import { CocktailDataService } from 'src/app/services/cocktail-data.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {

  constructor(
    private _cocktailDataService: CocktailDataService
  ) { }

  ngOnInit(): void {
  }

  get cocktails(): Cocktail[]{
    return this._cocktailDataService.cocktails;
  }

  get mocktails(): Cocktail[]{
    return this._cocktailDataService.mocktails;
  }

}
