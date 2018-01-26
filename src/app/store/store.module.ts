import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ModelModule } from "../model/model.module";
import { CartDetailsModule } from "../details/details.module";
import { CartSummaryModule } from "../summary/summary.module";
import { CheckoutModule } from "../checkout/checkout.module";


import { StoreComponent } from "./store.component";


@NgModule({
imports: [ModelModule, CheckoutModule, CartDetailsModule, CartSummaryModule, RouterModule, BrowserModule, FormsModule],
declarations: [StoreComponent],
exports: [StoreComponent]
})

export class StoreModule { }