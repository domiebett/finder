import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

  constructor() { }

  /**
   * Handles http errors
   *
   * @param error - http error
   */
  handleErrors(error) {
    console.log(error.status);
  }

}
