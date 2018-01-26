import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Input() authType;
  @Output() close = new EventEmitter();

  constructor(
    private authService: AuthService
  ) {
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  ngOnInit() { }

  /**
   * Authenticates user, either logs or registers them
   */
  authenticate(form) {
    if (form.valid) {
      const authenticate = this.authType === 'login' ? this.login : this.register;
      authenticate(form.value);
      this.closeModal();
    }
  }

  /**
   * Sends user credentials to log them in.
   */
  login(formValue) {
    this.authService.login(formValue)
      .toPromise()
      .then(response => response);
  }

  /**
   * Sends user credentials to register them
   */
  register(formValue) {
    this.authService.register(formValue)
      .toPromise()
      .then(response => response);
  }

  /**
   * Close the authentication modal
   */
  closeModal() {
    this.close.emit();
  }
}
