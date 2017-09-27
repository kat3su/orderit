import { Component, OnInit } from '@angular/core';
import {Cart} from '../@model/cart';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  public cart: Cart;
  constructor(private router: Router) {}

  ngOnInit() {
    this.cart = new Cart();
  }

  buildProduct() {
    this.router.navigate(['builder']);
  }
}
