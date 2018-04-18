import { fadeInAnimation } from './../../../animations/fade-in.animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@fadeInAnimation]': '' }
})
export class DashboardComponent implements OnInit {

  currentUser;

  constructor(
  ) { }

  ngOnInit() {
  }
}
