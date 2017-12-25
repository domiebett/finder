import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ItemsService {

  itemsBaseUrl: string;

  constructor(private http: Http) {
    this.itemsBaseUrl = 'http://localhost:8888/api/v1/items';
  }

  /**
   * Retrives either finder or owner reported items from api endpoint
   *
   * @param {Object} params - object containing parameter property and
   *    value as key value pairs
   *
   * @return {Observable} - Response from api with items
   */
  getItems(params) {
    const completeUrl = `${this.itemsBaseUrl}?${this.paramBuilder(params)}`;
    return this.http.get(completeUrl)
      .map((response: Response) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  /**
   * Builds a the parameter string
   *
   * @param {Object} params key value pairs with parameter property and
   *    value
   *
   * @return {string} joined and stringified url parameters
   */
  paramBuilder(params) {
    const urlParameters = [];

    for (const property in params) {
      if (params.hasOwnProperty(property)) {
        const urlParameter = `${property}=${params[property]}`;
        urlParameters.push(urlParameter);
      }
    }

    return urlParameters.join('&');
  }
}
