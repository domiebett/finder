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
  backgroundImageClass = 'error-background';

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

  /**
   * Sets the status code, error message and background image
   *
   * @param errorCode - The html error code
   */
  setDisplayedErrors(errorCode) {
    this.statusCode = errorCode;
    if ((errorCode in this.errors)) {
      this.errorMessage = this.errors[errorCode];
    } else {
      this.errorMessage =
        'An unexpected error occured. We apologise for the inconvinience';
    }

    if (errorCode === '404' || errorCode === '500') {
      this.backgroundImageClass = `error-${errorCode}-background`;
    }
  }
}
