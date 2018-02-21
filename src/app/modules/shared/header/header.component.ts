import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() header;
  currentUser;
  subscription;

  constructor(
    private authService: AuthService,
    private modalService: ModalService
  ) {
    this.currentUser = this.authService.currentUser;
    this.subscription = authService.currentUserChange
      .subscribe((user) => {
        this.currentUser = user;
      });
  }

  ngOnInit() { }

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
   * Logs a user out.
   */
  logout() {
    this.authService.logout();
  }
}
