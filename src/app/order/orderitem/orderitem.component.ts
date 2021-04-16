import { Component, OnInit, Input } from '@angular/core';
import { OrderDataService } from 'src/app/_services/order-data.service';
import { Datawrapper } from '../datawrapper';

@Component({
  selector: 'app-orderitem',
  templateUrl: './orderitem.component.html',
  styleUrls: ['./orderitem.component.css']
})
export class OrderitemComponent implements OnInit {
  @Input() wrapper: Datawrapper;
  
  constructor(
    private _orderDataService: OrderDataService
  ) {
   }

  ngOnInit(): void {
  }

  get amount(): number{
    return this._orderDataService.getValueFromMap(this.wrapper.title, this.wrapper.kind) / this.wrapper.amount;
  }

  plusAmount(){
    this._orderDataService.updateAmountMap(this.wrapper.title, 1 * this.wrapper.amount, this.wrapper.kind);
  }

  minAmount(){
    this._orderDataService.updateAmountMap(this.wrapper.title, -1 * this.wrapper.amount, this.wrapper.kind);
  }
}
