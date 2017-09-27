import {CartItem} from './cart-item';

const CART_ITEMS_STORAGE_KEY = 'cart__items';

/**
 * Cart Storage Class - STATIC
 * Interface between the application and storage layer
 */
export class CartStorage {

  /**
   * Get Cart Item Data (only) from an object
   * @param {CartItem} cartItem
   * @returns {any}
   */
  static getCartItemData(cartItem: CartItem) {
    return cartItem;
  }

  /**
   * Add an item to cart
   * @param {CartItem} item
   */
  static addItem(item: CartItem) {
    const currentItems = CartStorage.getItems();
    currentItems.push(CartStorage.getCartItemData(item));
    CartStorage.saveToStorage(currentItems);
  }

  /**
   * Update an item data by the provided index
   * @param {number} index
   * @param {CartItem} newItem
   * @returns {boolean}
   */
  static updateItem(index: number, newItem: CartItem) {
    const currentItems = CartStorage.getItems();
    currentItems[index] = CartStorage.getCartItemData(newItem);
    CartStorage.saveToStorage(currentItems);
    return true;
  }

  /**
   * Get all items in the current cart
   * @returns {string}
   */
  static getItems() {
    return this.retrieveFromStorage();
  }

  /**
   * Save cart items to the storage
   * @param cartItems
   */
  static saveToStorage(cartItems: any[]) {
    sessionStorage.setItem(CART_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }

  /**
   * Retrieve cart items data from storage
   * @returns {any[]}
   */
  static retrieveFromStorage() {
    try {
      const cartItems =  JSON.parse(sessionStorage.getItem(CART_ITEMS_STORAGE_KEY));
      if (!cartItems) {
        return [];
      }
      return cartItems;
    } catch (e) {
      console.error(e.message());
      return [];
    }
  }

  /**
   * Reset all data in the current cart
   */
  static reset() {
    sessionStorage.removeItem(CART_ITEMS_STORAGE_KEY);
  }
}
