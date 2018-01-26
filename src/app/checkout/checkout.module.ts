import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ModelModule } from "../model/model.module";

import { CheckoutComponent } from "./checkout.component";


@NgModule({
imports: [ModelModule, RouterModule, BrowserModule, FormsModule],
declarations: [CheckoutComponent],
exports: [CheckoutComponent]
})

export class CheckoutModule { }