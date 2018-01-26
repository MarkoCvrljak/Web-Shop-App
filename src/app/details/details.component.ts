import { Component } from '@angular/core';
import  { Cart } from "../model/cart.model";


@Component({
  moduleId: module.id,

  templateUrl: 'details.component.html',
})
export class CartDetailsComponent  {  

    constructor(private cart: Cart){}
}