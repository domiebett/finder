import { Injectable } from '@angular/core';

import { ModalComponent } from '../modules/shared/modal/modal.component';

@Injectable()
export class ModalService {

  private modal;

  constructor() {
  }

  /**
   * Registers the modal component to the modal service
   *
   * @param modalComponent - the modal component
   */
  registerModal(modalComponent: ModalComponent) {
    this.modal = modalComponent;
  }

  /**
   * Opens login modal
   */
  openLoginModal() {
    this.modal.openLoginModal();
  }

  /**
   * Opens register modal
   */
  openRegisterModal() {
    this.modal.openRegisterModal();
  }

  /**
   * Opens modal to add lost items.
   */
  openAddItemModal() {
    this.modal.openAddItemModal();
  }
}
