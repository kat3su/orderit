import {CartItem} from './cart-item';

export class Cart {
  items: CartItem[];

  constructor() {
    this.items = [];
  }

  totalValue() {
    return 0;
  }

  addItem(item: CartItem) {
    this.items.push(item);
  }
}
