import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admindashboard/dashboard/dashboard.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { CocktailComponent } from './cocktail/cocktail/cocktail.component';

import { CocktailboxComponent } from './cocktailbox/cocktailbox/cocktailbox.component';
import { OrderComponent } from './order/order/order.component';
import { ContactComponent } from './static/contact/contact.component';
import { FaqComponent } from './static/faq/faq.component';
import { HomeComponent } from './static/home/home.component';
import { PageNotFoundComponent } from './static/page-not-found/page-not-found.component';
import { AdminGuard } from './_guards/admin.guard';
import { AuthorizedGuard } from './_guards/authorized.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'faq', component: FaqComponent},
  { 
    path: 'cocktailbox', 
    loadChildren: () => import('./cocktailbox/cocktailbox.module').then(mod => mod.CocktailboxModule)
  },
  { 
    path: 'cocktaillist',
    loadChildren: () => import('./cocktail/cocktail.module').then(mod => mod.CocktailModule)
  },
  { 
    path: 'order', 
    canActivate: [AuthorizedGuard],
    loadChildren: () => import('./order/order.module').then(mod => mod.OrderModule)
  },
  { 
    path: 'auth', 
    loadChildren: () => import('./authentication/authentication.module').then(mod => mod.AuthenticationModule)
  },
  { 
    path: 'admin', 
    canActivate: [AuthorizedGuard, AdminGuard],
    loadChildren: () => import('./admindashboard/admindashboard.module').then(mod => mod.AdmindashboardModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
