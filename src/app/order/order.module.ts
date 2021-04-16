import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { OrderselectComponent } from './orderselect/orderselect.component';
import { OrderitemComponent } from './orderitem/orderitem.component';
import { OrderconfirmComponent } from './orderconfirm/orderconfirm.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrderComponent, 
    OrderselectComponent,
    OrderitemComponent,
    OrderconfirmComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }
