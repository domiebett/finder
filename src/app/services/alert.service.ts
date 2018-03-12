import { AlertComponent } from './../modules/shared/alert/alert.component';
import { Injectable } from '@angular/core';
import { AlertComponent } from './../modules/shared/alert/alert.component';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';

@Injectable()
export class AlertService {

  private alert;

  constructor() {  }

  registerAlert(alertComponent: AlertComponent) {
    this.alert = alertComponent;
  }

  /**
   * Pops up an alert to show the message with appropriate styles
   *
   * @param alertMessage - The message to be displayed
   * @param alertType - The type of alert, i.e. success or warning
   */
  popUpAlert(alertMessage, alertType) {
    console.log('Service');
    this.alert.openAlertPopup(alertMessage, alertType);
  }
}
