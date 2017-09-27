import {Product} from './product';

export class CartItem {
  product: Product;
  quantity: number;
  note?: string;
  price: number;
  constructor(product?: Product) {
    this.product = product ? product : new Product();
    this.quantity = 1;
    this.price = 0;
  }
}
