import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailboxComponent } from './cocktailbox/cocktailbox.component';
import { BoxwrapperComponent } from './boxwrapper/boxwrapper.component';



@NgModule({
  declarations: [
    CocktailboxComponent,
    BoxwrapperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CocktailboxComponent
  ]
})
export class CocktailboxModule { }
