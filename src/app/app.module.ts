import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailboxModule } from './cocktailbox/cocktailbox.module';
import { StaticModule } from './static/static.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CocktailModule } from './cocktail/cocktail.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { OrderModule } from './order/order.module';
import { AdmindashboardModule } from './admindashboard/admindashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './_interceptors';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CocktailboxModule,
    StaticModule,
    CocktailModule,
    AuthenticationModule,
    OrderModule,
    AdmindashboardModule,
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
