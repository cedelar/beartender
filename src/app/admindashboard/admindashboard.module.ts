import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderedboxlistComponent } from './orderedboxlist/orderedboxlist.component';
import { RouterModule, Routes } from '@angular/router';
import { DeliverylocationsComponent } from './deliverylocations/deliverylocations.component';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'orders', component: OrderedboxlistComponent},
  { path: 'locations', component: DeliverylocationsComponent}
]

@NgModule({
  declarations: [
    DashboardComponent, 
    OrderedboxlistComponent, 
    DeliverylocationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4kLjsfmWm8VZlVckOxJVq2gjS5irIKi0'
    })
  ],
  exports: [
    DashboardComponent, 
    OrderedboxlistComponent
  ]
})
export class AdmindashboardModule { }
