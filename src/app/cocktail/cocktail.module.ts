import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailComponent } from './cocktail/cocktail.component';
import { CocktailwrapperComponent } from './cocktailwrapper/cocktailwrapper.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CocktailComponent},
]

@NgModule({
  declarations: [
    CocktailComponent,
    CocktailwrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CocktailComponent
  ]
})
export class CocktailModule { }


