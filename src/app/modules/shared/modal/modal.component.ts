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

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.registerModal(this);
  }

  @HostListener('click')
  onClick() {
    if (!this.modal.nativeElement.contains(event.target)) {
      this.closeModal();
    }
  }

  /**
   * Opens the login modal
   */
  openLoginModal() {
    this.modalType = 'login';
    this.modalWidth = 'slim';
  }

  /**
   * Opens the register modal
   */
  openRegisterModal() {
    this.modalType = 'register';
    this.modalWidth = 'slim';
  }

  /**
   * Close modal
   */
  closeModal() {
    this.modalType = 'none';
  }
}
