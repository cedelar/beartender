import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/authentication/login/login.component';
import { Cocktail } from 'src/app/_model/cocktail.model';
import { Cocktailbox } from 'src/app/_model/cocktailbox.model';
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
  private _cocktailboxes: Cocktailbox[] = [];
  private _cocktails: Cocktail[] = [];
  private _mocktails: Cocktail[] = [];
  public errormessage: string = "";

  constructor(
    private _cocktailboxDataService: CocktailboxDataService,
    private _cocktailDataService: CocktailDataService,
    private _orderDataService: OrderDataService,
    private _authService: AuthenticationService,
  ) { 
  }

  ngOnInit(): void {
    this._cocktailboxDataService.cocktailboxes$.subscribe(
      v => {
        this._cocktailboxes = v;
      },
      (err: HttpErrorResponse) => {
          this.errormessage = `Er was een probleem tijdens het laden, probeer het later opnieuw`;
      }
    );
    this._cocktailDataService.cocktails$.subscribe(
      v => {
        this._cocktails = v;
      },
      (err: HttpErrorResponse) => {
          this.errormessage = `Er was een probleem tijdens het laden, probeer het later opnieuw`;
      }
    );
    this._cocktailDataService.mocktails$.subscribe(
      v => {
        this._mocktails = v;
      },
      (err: HttpErrorResponse) => {
          this.errormessage = `Er was een probleem tijdens het laden, probeer het later opnieuw`;
      }
    );
  }

  get ToOrderAmount(): number{
    return this._orderDataService.toOrderAmount$.value;
  }

  get OrderedAmount(): number{
    return this._orderDataService.orderedAmount$.value;
  }

  get cocktailboxesData(): Datawrapper[]{
    return this._cocktailboxes
      .map(c => new Datawrapper(c.name, "€ " + c.price.toString() + ",00 / st", c.imageLink, "box", c.amount));
  }

  get cocktailsData(): Datawrapper[]{
    return this._cocktails
      .map(c => new Datawrapper(c.name, "Cocktail", c.imageLink, "cocktail", 1))
      .concat(
        this._mocktails
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
