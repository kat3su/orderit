import {CartStorage} from './cart-storage';
import {CartItem} from './cart-item';

export class Cart {
  items: CartItem[];
  constructor() {
    this.items = [];
    this.restoreFromStorage();
  }
  restoreFromStorage() {
    CartStorage.getItems().map(item => {
      this.items.push(item);
    });
  }
  hasItem() {
    return this.items.length > 0;
  }
}
