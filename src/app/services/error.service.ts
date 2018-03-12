import { AlertService } from './alert.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

  constructor(private alertService: AlertService) { }

  /**
   * Handles http errors
   *
   * @param error - http error
   */
  handleErrors(error) {
    console.log(error.status, 'error service');
    this.alertService.popUpAlert(error.json().message, 'warning');
  }

}
