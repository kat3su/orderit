import { Component, OnInit } from '@angular/core';
import {Cart} from '../@model/cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})
export class ShoppingCartComponent implements OnInit {

  cart: Cart;
  constructor() {
    this.cart = new Cart();
  }

  ngOnInit() {
  }

}
