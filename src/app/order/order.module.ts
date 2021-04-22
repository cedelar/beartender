import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { OrderselectComponent } from './orderselect/orderselect.component';
import { OrderitemComponent } from './orderitem/orderitem.component';
import { OrderconfirmComponent } from './orderconfirm/orderconfirm.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: OrderComponent},
]

@NgModule({
  declarations: [
    OrderComponent, 
    OrderselectComponent,
    OrderitemComponent,
    OrderconfirmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }
