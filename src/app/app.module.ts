import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent }  from './app.component';
import { CartDetailsComponent } from "./details/details.component";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./checkout/checkout.component";

import { StoreModule } from "./store/store.module";
import { AppRoutingModule }     from './app.router';



@NgModule({
  imports:      [ BrowserModule, StoreModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
