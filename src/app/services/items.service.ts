import { ErrorService } from './error.service';
import { HttpService } from './http.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from './../../environments/environment';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ItemsService {

  itemsBaseUrl: string;
  pagination;
  paginationChange: Subject<any> = new Subject<any>();

  constructor(
    private http: HttpService,
    private authService: AuthService,
    private errorService: ErrorService) {
    this.itemsBaseUrl = `${environment.apiBaseUrl}/items`;
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
      .map((response: Response) => {
        const itemResponse = response.json();
        this.pagination = itemResponse.pagination;
        this.paginationChange.next(this.pagination);
        return response.json();
      })
      .catch((error) => {
        this.errorService.handleErrors(error);
        return Observable.throw(error);
    });
  }

  /**
   * Sends form details to create object
   *
   * @param formValue - values from the add item form
   *
   * @return { Observable } -Response from api with item added
   */
  addItem(formValue) {
    const completeUrl = `${this.itemsBaseUrl}`;
    return this.http.post(completeUrl, formValue)
      .map((response: Response) => response.json())
      .catch((error) => {
        this.errorService.handleErrors(error);
        return Observable.throw(error);
    });
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
