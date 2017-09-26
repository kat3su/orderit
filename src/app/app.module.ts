import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OptionSelectionComponent } from './product-builder/option-selection/option-selection.component';
import { ProductBuilderComponent } from './product-builder/product-builder.component';
import { ProductOrderingComponent } from './product-ordering/product-ordering.component';
import {FormsModule} from '@angular/forms';
import { ProductSummaryComponent } from './product-builder/product-summary/product-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionSelectionComponent,
    ProductBuilderComponent,
    ProductOrderingComponent,
    ProductSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
