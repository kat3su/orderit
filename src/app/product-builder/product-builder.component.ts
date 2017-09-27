import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../@model/product';
import {ProductOption} from '../@model/product-option';
import {CartItem} from '../@model/cart-item';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

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
  @Input()
  cartItem: CartItem = new CartItem();
  @Output()
  onAddToCart: EventEmitter<CartItem> = new EventEmitter();
  constructor(private http: Http) { }

  ngOnInit() {
    this.displayOption();
  }
  onOptionSubmit(selectedOption) {
    this.cartItem.product.addOption(selectedOption);
    this.options[this.optionIndex].value = selectedOption.value;
    this.cartItem.price = this.priceFormula();
    this.optionIndex++;
    this.displayOption();
  }
  addToCart() {
    this.onAddToCart.emit(this.cartItem);
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
