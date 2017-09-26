import { Component } from '@angular/core';
import {Product} from './@model/product';
import {CartItem} from './@model/cart-item';
import {Cart} from './@model/cart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  cart: Cart = new Cart();
  addToCart(cartItem: CartItem) {
    this.cart.addItem(cartItem);
  }
}
