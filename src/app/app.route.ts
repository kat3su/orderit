import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductBuilderComponent} from './product-builder/product-builder.component';

const appRoutes: Routes = [
  { path: '', component: ProductBuilderComponent },
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
