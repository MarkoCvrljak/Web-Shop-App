import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../model/model.module";

import { CartSummaryComponent } from "./summary.component";


@NgModule({
imports: [ModelModule, RouterModule, BrowserModule, FormsModule],
declarations: [CartSummaryComponent],
exports: [CartSummaryComponent]
})

export class CartSummaryModule { }