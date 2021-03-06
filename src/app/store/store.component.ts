import { Component } from "@angular/core";


import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import  { Cart } from "../model/cart.model";

@Component({
    selector: "store",
    moduleId: module.id,
    templateUrl: "store.component.html"
})

export class StoreComponent{
    public selectedCat:string;
    public productsPerPage = 4;
    public selectedPage = 1;

    constructor ( private repository: ProductRepository, private cart: Cart){}

    get products(): Product[]{
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCat)
        .slice(pageIndex, pageIndex + this.productsPerPage)
    }

    get categories(): string[]{
        return this.repository.getCategories();
    }

    changeCat(newCat: string){
        this.selectedCat = newCat;
        this.selectedPage = 1;
    }

    changePageSize(newSize: number){
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    changePage(newPage: number){
        this.selectedPage = newPage;
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.repository
        .getProducts(this.selectedCat).length / this.productsPerPage))
        .fill(0).map((x, i) => i + 1);
    }

    addToCart(product: Product){
       this.cart.addLine(product);
       
    }
}