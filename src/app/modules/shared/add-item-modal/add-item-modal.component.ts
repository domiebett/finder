import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent implements OnInit {

  @Output() close = new EventEmitter();

  modalTitle = 'Add Item';

  constructor() { }

  ngOnInit() {
  }

  /**
   * Validate form data
   */
  validateForm(form) {
    if (form.valid) {
      this.submitForm(form.value);
      this.closeModal();
    }
  }

  /**
   * Submits form data.
   */
  submitForm(formValue) {

  }

  /**
   * Close this modal
   */
  closeModal() {
    this.close.emit();
  }

}
