import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent} from './home/home.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    ContactComponent,
    FaqComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    PageNotFoundComponent,
    ContactComponent,
    FaqComponent
  ]
})
export class StaticModule { }
