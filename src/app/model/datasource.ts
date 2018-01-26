import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

import { Product } from "./product.model";
import { Order } from "./order.model";

@Injectable()
    export class DataSource{
        private products: Product[] = [
            new Product(1, "Product 1", "Sport", "Product 1", 100),
            new Product(2, "Product 2", "Sport", "Product 2", 100),
            new Product(3, "Product 3", "Sport", "Product 3", 100),
            new Product(4, "Product 4", "Sport", "Product 4", 100),
            new Product(5, "Product 5", "Sport", "Product 5", 100),
            new Product(6, "Product 6", "Lov", "Product 6", 100),
            new Product(7, "Product 7", "Lov", "Product 7", 100),
            new Product(8, "Product 8", "Lov", "Product 8", 100),
            new Product(9, "Product 9", "Lov", "Product 9", 100),
            new Product(10, "Product 10", "Lov", "Product 10", 100),
            new Product(11, "Product 11", "Ribolov", "Product 11", 100),
            new Product(12, "Product 12", "Ribolov", "Product 12", 100),
            new Product(13, "Product 13", "Ribolov", "Product 13", 100),
            new Product(14, "Product 14", "Ribolov", "Product 14", 100),
            new Product(15, "Product 15", "Ribolov", "Product 15", 100),
        ];

        getProducts(): Observable<Product[]>{
            return Observable.from([this.products]);
        }

        saveOrder(order: Order): Observable<Order> {
            console.log(JSON.stringify(order));
            return Observable.from([order]);
        }
    }