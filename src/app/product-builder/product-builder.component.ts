import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../@model/product';
import {ProductOption} from '../@model/product-option';
import {CartItem} from '../@model/cart-item';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {CartStorage} from '../@model/cart-storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-builder',
  templateUrl: './product-builder.component.html',
  styleUrls: ['./product-builder.component.sass']
})
export class ProductBuilderComponent implements OnInit {
  formulaOption1 = {
    file: 'types',
    value: 0
  };
  formulaOption2 = {
    file: 'colours',
    value: 0
  };
  formularOption3 = {
    file: 'addon',
    value: 0,
  };
  options = [ this.formulaOption1, this.formulaOption2, this.formularOption3 ];
  optionIndex = 0;
  productOptions: ProductOption[];
  cartItem: CartItem = new CartItem();
  hasAllOptionSelected = false;
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.displayOption();
  }
  onOptionSubmit(selectedOption) {
    this.cartItem.product.addOption(selectedOption);
    this.options[this.optionIndex].value = selectedOption.value;
    this.cartItem.price = this.priceFormula();
    this.optionIndex++;
    if (this.optionIndex >= this.options.length) {
      this.hasAllOptionSelected = true;
    } else {
      this.displayOption();
    }
  }
  addToCart() {
    CartStorage.addItem(this.cartItem);
    this.router.navigate(['']);
  }
  priceFormula() {
    return this.formulaOption1.value + this.formulaOption2.value + this.formularOption3.value;
  }
  displayOption() {
    this.getData(this.getCurrentOption().file).then(response => {
      this.productOptions = [];
      response.map(optionData => {
        this.productOptions.push(new ProductOption(optionData));
      });
    });
  }
  getCurrentOption() {
    return this.options[this.optionIndex];
  }
  getData(fileName: string) {
    const fileUrl = `assets/@api/${fileName}.json`;
    return this.http.get(fileUrl).toPromise().then(response => response.json());
  }
}
