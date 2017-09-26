import {ProductOption} from './product-option';

export class Product {
  options: ProductOption[] = [];

  addOption(option: ProductOption) {
    this.options.push(option);
  }
}
