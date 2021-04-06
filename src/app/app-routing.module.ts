import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CocktailboxComponent } from './cocktailbox/cocktailbox/cocktailbox.component';
import { HomeComponent } from './static/home/home.component';
import { PageNotFoundComponent } from './static/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'cocktailbox', component: CocktailboxComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
