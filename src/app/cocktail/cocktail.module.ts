import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailComponent } from './cocktail/cocktail.component';
import { CocktailwrapperComponent } from './cocktailwrapper/cocktailwrapper.component';



@NgModule({
  declarations: [
    CocktailComponent,
    CocktailwrapperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CocktailComponent
  ]
})
export class CocktailModule { }


