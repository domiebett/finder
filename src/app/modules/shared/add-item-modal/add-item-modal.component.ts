import { ItemsService } from './../../../services/items.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from './../../../services/category.service';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent implements OnInit {

  @Output() close = new EventEmitter();

  modalTitle = 'Add Item';
  categories: object[];
  selectedCategory;

  constructor(
    private itemsService: ItemsService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  /**
   * Gets all categories
   */
  getCategories() {
    this.categoryService.getCategories()
      .toPromise()
      .then((response) => {
        this.categories = response;
      });
  }

  /**
   * Validate form data
   */
  validateForm(form) {
    const isFormValid = form.valid && form.value.reporter.length > 0 && this.selectedCategory;
    if (isFormValid) {
      const formValue = form.value;
      formValue['category'] = this.selectedCategory.id;
      this.submitForm(formValue);
      this.closeModal();
    }
  }

  /**
   * Gets value selected in drop down.
   *
   * @param event - event emitted from dropdown component
   */
  addDropDownValue(event) {
    this.selectedCategory = event;
  }

  /**
   * Submits form data.
   */
  submitForm(formValue) {
    this.itemsService.addItem(formValue)
      .toPromise()
      .then((response) => response);
  }

  /**
   * Close this modal
   */
  closeModal() {
    this.close.emit();
  }

}
