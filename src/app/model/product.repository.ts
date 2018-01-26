import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { DataSource } from "./datasource";

@Injectable()
export class ProductRepository{
    private products: Product[] = [];
    private categories: string[] = [];

    constructor( private dataSource: DataSource){
        this.dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category)
            .filter((c, index, array) => array.indexOf(c) == index)
            
            
        });
    }

    getProducts(category: string): Product[]{
        return this.products
        .filter(p => category == p.category || category == null )
    }

    getCategories(){
        return this.categories
    }
}