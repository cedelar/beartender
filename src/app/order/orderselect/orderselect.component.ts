import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { CocktailDataService } from 'src/app/_services/cocktail-data.service';
import { CocktailboxDataService } from 'src/app/_services/cocktailbox-data.service';
import { OrderDataService } from 'src/app/_services/order-data.service';
import { Datawrapper } from '../datawrapper';

@Component({
  selector: 'app-orderselect',
  templateUrl: './orderselect.component.html',
  styleUrls: ['./orderselect.component.css']
})
export class OrderselectComponent implements OnInit {

  constructor(
    private _cocktailboxDataService: CocktailboxDataService,
    private _cocktailDataService: CocktailDataService,
    private _orderDataService: OrderDataService,
    private _authService: AuthenticationService,
  ) { 
    console.log("Const");
  }

  ngOnInit(): void {
    console.log("Init");
  }

  get ToOrderAmount(): number{
    return this._orderDataService.toOrderAmount$.value;
  }

  get OrderedAmount(): number{
    return this._orderDataService.orderedAmount$.value;
  }

  get cocktailboxes(): Datawrapper[]{
    return this._cocktailboxDataService.cocktailboxes
      .map(c => new Datawrapper(c.name, "€ " + c.price.toString() + ",00 / st", c.imageLink, "box", c.amount));
  }

  get cocktails(): Datawrapper[]{
    return this._cocktailDataService.cocktails
      .map(c => new Datawrapper(c.name, "Cocktail", c.imageLink, "cocktail", 1))
      .concat(
        this._cocktailDataService.mocktails
        .map(c => new Datawrapper(c.name, "Mocktail", c.imageLink, "cocktail", 1))
      );
  }

  onOrder(): void{
    console.log("bestel!")
  }

}
