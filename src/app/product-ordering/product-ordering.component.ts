import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../@model/product';
import {Cart} from '../@model/cart';

@Component({
  selector: 'app-product-ordering',
  templateUrl: './product-ordering.component.html',
  styleUrls: ['./product-ordering.component.scss']
})
export class ProductOrderingComponent implements OnInit {

  @Input()
  cart: Cart;
  constructor() { }

  ngOnInit() {
  }

}
