import { Component } from '@angular/core';

import  { Cart } from "../model/cart.model";

@Component({
  moduleId: module.id,
  selector: 'cart-summary',
  templateUrl: 'summary.component.html',
 
})
export class CartSummaryComponent  {  

    constructor(private cart: Cart){}
}