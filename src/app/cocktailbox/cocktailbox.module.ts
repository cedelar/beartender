import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailboxComponent } from './cocktailbox/cocktailbox.component';
import { BoxwrapperComponent } from './boxwrapper/boxwrapper.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CocktailboxComponent},
]

@NgModule({
  declarations: [
    CocktailboxComponent,
    BoxwrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CocktailboxComponent
  ]
})
export class CocktailboxModule { }
