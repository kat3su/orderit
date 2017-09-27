import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductBuilderComponent} from './product-builder/product-builder.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';

const appRoutes: Routes = [
  { path: '', component: ShoppingCartComponent },
  { path: 'builder', component: ProductBuilderComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
