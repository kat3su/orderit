import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from '../../@model/cart-item';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.sass']
})
export class ProductSummaryComponent implements OnInit {

  @Input()
  cartItem: CartItem = new CartItem();
  @Output()
  cartItemChange: EventEmitter<CartItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.cartItemChange.emit(this.cartItem);
  }
}
