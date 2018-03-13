import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  statusCode = 0;
  errorMessage = '';
  backgroundImageUrl = '';

  // errors = {
  //   not_found: [404, 'This page is unavailable']
  // };

  errors = {
    404: 'The page you were looking for was not found.',
    500: 'An error occured. We apologise for the inconvinience',
    400: 'The server responded with a bad request.'
  };

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.setDisplayedErrors(params['errorCode']);
    });
  }

  setDisplayedErrors(errorCode) {
    this.statusCode = errorCode;
    if ((errorCode in this.errors)) {
      this.errorMessage = this.errors[errorCode];
    } else {
      this.errorMessage =
        'An unexpected error occured. We apologise for the inconvinience';
    }
    this.backgroundImageUrl = `error-${this.statusCode}-background`;
  }
}
