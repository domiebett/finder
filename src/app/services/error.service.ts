import { AlertService } from './alert.service';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorService {

  constructor(
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router
  ) { }

  /**
   * Handles http errors
   *
   * @param error - http error
   */
  handleErrors(error) {
    let errorMessage = error.json().message;
    if (error.status === 401) {
      this.authService.logout();
    } else if (error.status === 404) {
      this.router.navigate(['/error/404']);
    }
    errorMessage = errorMessage ? errorMessage : 'An error occured. We apologise for the inconvinience';
    this.alertService.popUpAlert(errorMessage, 'warning');
  }
}
