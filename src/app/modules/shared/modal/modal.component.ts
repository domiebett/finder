import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('modal') modal;
  modalType = 'none';
  modalWidth = 'slim';
  modalLength = 'short';

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.registerModal(this);
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    // if (!this.modal.nativeElement.contains(event.target)) {
    //   this.closeModal();
    // }

    if (event.path[1].localName === 'app-modal') {
      this.closeModal();
    }
  }

  /**
   * Opens the login modal
   */
  openLoginModal() {
    this.modalType = 'login';
  }

  /**
   * Opens the register modal
   */
  openRegisterModal() {
    this.modalType = 'register';
  }

  /**
   * Opens modal to add item.
   */
  openAddItemModal() {
    this.modalType = 'addItem';
  }

  /**
   * Close modal
   */
  closeModal() {
    this.modalType = 'none';
  }
}
