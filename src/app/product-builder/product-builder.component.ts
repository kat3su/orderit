import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../@model/product';
import {ProductOption} from '../@model/product-option';
import {CartItem} from '../@model/cart-item';

@Component({
  selector: 'app-product-builder',
  templateUrl: './product-builder.component.html',
  styleUrls: ['./product-builder.component.sass']
})
export class ProductBuilderComponent implements OnInit {
  productOptions: ProductOption[] = [
    { title: 'test', image: '', value: 'test'},
    { title: 'test2', image: '', value: 'test2'}
  ];
  @Input()
  cartItem: CartItem = new CartItem();
  @Output()
  onAddToCart: EventEmitter<CartItem> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onOptionSubmit(selectedOption) {
    this.cartItem.product.addOption(selectedOption);
  }
  addToCart() {
    this.onAddToCart.emit(this.cartItem);

  }
}
