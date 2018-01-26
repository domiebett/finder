import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  currentUser;
  subscription;

  constructor(
    private modalService: ModalService,
    private authService: AuthService
  ) {
    this.currentUser = this.authService.currentUser;
    this.subscription = authService.currentUserChange
      .subscribe((user) => {
        this.currentUser = user;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Opens the authentication login modal
   */
  openLoginModal() {
    this.modalService.openLoginModal();
  }

  /**
   * Opens the authentication register modal
   */
  openRegisterModal() {
    this.modalService.openRegisterModal();
  }
}
