import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { FilterComponent } from './filter/filter.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import DataService from './../services/service.service';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import RecipeIndex from 'src/mock/rcepies';


const appRoutes: Routes = [ 
  { path: 'list', component: ListComponent, data: { items:RecipeIndex } },
	{ path: 'page1', component: Page1Component }, 
  { path: 'page2', component: Page2Component },
  // { path: '**', component: ListComponent }
]; 

export const routing = RouterModule.forRoot(appRoutes);


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    FilterComponent,
    ContactFormComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

