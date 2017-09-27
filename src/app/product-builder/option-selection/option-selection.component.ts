import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductOption} from '../../@model/product-option';

@Component({
  selector: 'app-option-selection',
  templateUrl: './option-selection.component.html',
  styleUrls: ['./option-selection.component.sass']
})
export class OptionSelectionComponent implements OnInit {

  public optionTitle: string;
  public selectedOption: ProductOption;
  @Input()
  public productOptions: ProductOption[];
  @Output()
  public onSubmit: EventEmitter<ProductOption> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  /**
   * Update selectedOption variable depends on the provided option
   * @param {ProductOption} option
   */
  updateSelectedOption(option: ProductOption) {
    if (this.selectedOption === option) {
      this.resetSelectedOption();
    } else {
      this.selectedOption = option;
    }
  }

  emitSelectedOption() {
    this.onSubmit.emit(this.selectedOption);
    this.resetSelectedOption();
  }

  resetSelectedOption() {
    this.selectedOption = null;
  }
}
