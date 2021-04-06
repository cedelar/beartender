import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailboxModule } from './cocktailbox/cocktailbox.module';
import { StaticModule } from './static/static.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CocktailModule } from './cocktail/cocktail.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CocktailboxModule,
    StaticModule,
    CocktailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
