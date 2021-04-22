import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/_model/cocktail.model';
import { Cocktailbox } from 'src/app/_model/cocktailbox.model';
import { Order } from 'src/app/_model/order.model';
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
  private _isDelivery: boolean;
  
  constructor(
    private _orderDataService: OrderDataService,
    private _authService: AuthenticationService,
    private _cocktailboxDataService: CocktailboxDataService,
    private _cocktailDataService: CocktailDataService
  ) {}

  ngOnInit(): void {
    this._isDelivery = true;
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
    if((this.totalBoxPrice > 35.00 && this.FREEDELIVERY.includes(this._authService.user$.value.city.toLowerCase())) || !this.isDelivery){
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

  get loggedInAdress(): string{
    var loggedInUser = this._authService.user$.value;
    return loggedInUser.street + " " + loggedInUser.number + ", " + loggedInUser.postcode + " " + loggedInUser.city;
  }

  get isDelivery(): boolean{
    return this._isDelivery;
  }

  onDelivery(): void{
    this._isDelivery = true;
  }

  onTakeaway(): void{
    this._isDelivery = false;
  }

  onConfirm(): void{
    var order = this.generateOrder()
    if(order != null){
      this._orderDataService.sendOrderToServer(order);
    }
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

  private generateOrder(): Order{
    var user = this._authService.user$.value;
    var date;
    var adress;
    if(this.isDelivery){
      date = (document.getElementById("deliverdate") as HTMLInputElement).value;
      adress = user.street + " " + user.number + ", " + user.postcode + " " + user.city;
    }else{
      date = (document.getElementById("takeawaydate") as HTMLInputElement).value;
      adress = "Dam, 9170 Sint-Gillis-Waas";
    }

    if(date == null || date == undefined || date == ""){
      console.log("Insert a date!");
      document.getElementById("errormessage").textContent = "Vul de gewenste datum in!"
      return null;
    }else if(!this.validDate(date)){
      console.log("Insert a date in the future!");
      document.getElementById("errormessage").textContent = "Vul een datum in de toekomst in!"
      return null;
    }else{
      document.getElementById("errormessage").textContent = ""
      return new Order(
        1, //TODO
        user.email,
        this.isDelivery,
        user.street + " " + user.number + ", " + user.postcode + " " + user.city,
        date,
        this.boxAmountMap,
        this.cocktailAmountMap, 
        this.glassAmount,
        this.totalPrice, 
        false
      );
    }
  
  }

  private validDate(date: string): boolean{
    var today: Date = new Date();
    var splitDate: string[] = date.split("-");
    if( 
      parseInt(splitDate[2]) >= today.getDate() && 
      parseInt(splitDate[1]) >= today.getMonth() &&
      parseInt(splitDate[0]) >= today.getFullYear()
      ){
        return true;
      }else{
        return false;
      }
  }
}
