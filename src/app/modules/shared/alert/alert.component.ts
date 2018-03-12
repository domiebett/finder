import { AlertService } from './../../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  alerts = [];
  alertType = 'success';

  constructor(private alertService: AlertService) {
    this.closeAlertPopup = this.closeAlertPopup.bind(this);
  }

  ngOnInit() {
    this.alertService.registerAlert(this);
  }

  /**
   * Pops up an alert to show the message with appropriate styles
   *
   * @param alertMessage - The message to be displayed
   * @param alertType - The type of alert, i.e. success or warning
   */
  openAlertPopup(alertMessage, alertType) {
    console.log('Other component');
    this.alerts.push(alertMessage);
    this.alertType = alertType;
    this.timeout(this.closeAlertPopup, 5000);
  }

  closeAlertPopup() {
    this.alertType = '';
    // this.alerts = [];
  }

  timeout(functionName, time) {
    let stopCondition = false;
    Observable.interval(time)
    .takeWhile(() => !stopCondition)
    .subscribe(i => {
      stopCondition = true;
      functionName();
    });
  }
}
