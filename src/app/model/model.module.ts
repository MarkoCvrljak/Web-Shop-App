import { NgModule } from "@angular/core";

import { DataSource } from "./datasource";
import { ProductRepository } from "./product.repository";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";


@NgModule({
    providers: [ DataSource, ProductRepository, Cart, Order, OrderRepository,
         ]
})

export class ModelModule{}