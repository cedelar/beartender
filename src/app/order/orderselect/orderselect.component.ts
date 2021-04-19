import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/authentication/login/login.component';
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
  }

  ngOnInit(): void {
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

  get glasWrapper(): Datawrapper{
    return new Datawrapper("Cocktailglas", "€ 2 huur + € 3 waarborg / st", "./assets/images/background_4.jpg", "glas", 0);
  }

  onOrder(): void{
    this._orderDataService.setConfirmationState$(true);
  }

}
