import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailComponent } from './cocktail/cocktail/cocktail.component';

import { CocktailboxComponent } from './cocktailbox/cocktailbox/cocktailbox.component';
import { ContactComponent } from './static/contact/contact.component';
import { FaqComponent } from './static/faq/faq.component';
import { HomeComponent } from './static/home/home.component';
import { PageNotFoundComponent } from './static/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'cocktailbox', component: CocktailboxComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'cocktaillist', component: CocktailComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
