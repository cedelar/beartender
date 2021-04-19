import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/_model/cocktail.model';
import { Cocktailbox } from 'src/app/_model/cocktailbox.model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { CocktailDataService } from 'src/app/_services/cocktail-data.service';
import { CocktailboxDataService } from 'src/app/_services/cocktailbox-data.service';
import { OrderDataService } from 'src/app/_services/order-data.service';

@Component({
  selector: 'app-orderconfirm',
  templateUrl: './orderconfirm.component.html',
  styleUrls: ['./orderconfirm.component.css']
})
export class OrderconfirmComponent implements OnInit {
  private readonly FREEDELIVERY : string[] = ["sint-gillis-waas", "de klinge", "meerdonk", "sint-pauwels", "kemzeke"];
  
  constructor(
    private _orderDataService: OrderDataService,
    private _authService: AuthenticationService,
    private _cocktailboxDataService: CocktailboxDataService,
    private _cocktailDataService: CocktailDataService
  ) { }

  ngOnInit(): void {
  }

  get boxAmountMap(){
    return this._orderDataService.boxAmountMap;
  }

  get cocktailAmountMap(){
    return this._orderDataService.cocktailAmountMap;
  }

  get totalBoxPrice(): number{
    var counter = 0.00;
    for(let box of this.boxAmountMap.keys()){
      counter += this.getBoxPriceByName(box);
    }
    return counter;
  }

  get transportPrice(): number{
    if(this.totalBoxPrice > 35.00 && this.FREEDELIVERY.includes(this._authService.user$.value.city.toLowerCase())){
      return 0.00;
    }else{
      return 4.95;
    };
  }

  get totalPrice(): number{
    return this.totalBoxPrice + this.transportPrice + this.extraPrice;
  }

  get extraPrice(): number{
    return this._orderDataService.glassAmount * 5.00;
  }

  get glassAmount(): number{
    return this._orderDataService.glassAmount;
  }

  get glassPrice(): number{
    return this.glassAmount * 5;
  }

  getCocktailByName(name: string): Cocktail{
    return this._cocktailDataService.getCocktailByName(name);
  }

  getCocktailboxByName(name: string): Cocktailbox{
    return this._cocktailboxDataService.getCocktailboxByName(name);
  }

  getBoxAmountByName(name: string): number{
    return this.boxAmountMap.get(name) / this.getCocktailboxByName(name).amount;
  }

  getBoxPriceByName(name: string): number{
    return this.getCocktailboxByName(name).price * this.getBoxAmountByName(name);
  }
}
