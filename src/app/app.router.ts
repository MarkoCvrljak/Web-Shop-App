import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreFirstGuard } from "./guardRoute";
import { CartDetailsComponent }  from './details/details.component';
import { StoreComponent }  from './store/store.component';
import { CheckoutComponent } from "./checkout/checkout.component";

const routes: Routes = [
    { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard]},
    { path: "cart", component: CartDetailsComponent, canActivate: [StoreFirstGuard]},
    { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]},
    { path: "admin", loadChildren:"app/admin/admin.module#AdminModule", canActivate: [StoreFirstGuard]},
    { path: "**", redirectTo: "/store" }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ StoreFirstGuard ]
})
export class AppRoutingModule {}