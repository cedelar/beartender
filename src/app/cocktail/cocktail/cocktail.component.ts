import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/_model/cocktail.model';
import { CocktailDataService } from 'src/app/_services/cocktail-data.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {
  public cocktails: Cocktail[];
  public mocktails: Cocktail[];
  public errormessage: string = "";

  constructor(
    private _cocktailDataService: CocktailDataService
  ) { }

  ngOnInit(): void {
    this._cocktailDataService.cocktails$.subscribe(
      v => {
        this.cocktails = v;
      },
      (err: HttpErrorResponse) => {
          this.errormessage = `Er was een probleem tijdens het laden van de cocktails, probeer het later opnieuw`;
      }
    );
    this._cocktailDataService.mocktails$.subscribe(
      v => {
        this.mocktails = v;
      },
      (err: HttpErrorResponse) => {
          this.errormessage = `Er was een probleem tijdens het laden van de cocktails, probeer het later opnieuw`;
      }
    );
  }
}
