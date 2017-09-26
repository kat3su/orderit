import {Product} from './product';

export class CartItem {
  product: Product;
  quantity: number;
  note?: string;
  constructor(product?: Product) {
    this.product = product ? product : new Product();
    this.quantity = 1;
  }
}
