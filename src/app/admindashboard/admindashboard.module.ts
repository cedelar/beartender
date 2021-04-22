import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderedboxlistComponent } from './orderedboxlist/orderedboxlist.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'orders', component: OrderedboxlistComponent}
]

@NgModule({
  declarations: [
    DashboardComponent, 
    OrderedboxlistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DashboardComponent, 
    OrderedboxlistComponent
  ]
})
export class AdmindashboardModule { }
