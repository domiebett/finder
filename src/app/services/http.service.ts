import { Injectable } from '@angular/core';
import {
  Http,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
  private token: string;
  private options: RequestOptionsArgs;

  constructor(private http: Http) {
    this.setAuthorizationHeader();
  }

  /**
   * Adds an authorization header to Request options
   */
  setAuthorizationHeader() {
    this.options = { headers: new Headers() };
    this.token = localStorage.getItem('authToken');
    this.options.headers.set('Authorization', `Bearer ${this.token}`);
  }

  /**
   * Sends post requests
   *
   * @param {String} url - http url for api
   * @param {Object} requestParams - parameters to be sent with request
   *
   * @return {Observable} - response from the server
   */
  post(url: string, requestParams?: object) {
    this.setAuthorizationHeader();
    return this.http.post(url, requestParams, this.options);
  }

  /**
   * Sends get requests
   *
   * @param {String} url - http url for api
   * @param {Object} requestParams - parameters to be sent with request
   *
   * @return {Observable} - response from the server
   */
  get(url: string) {
    this.setAuthorizationHeader();
    return this.http.get(url, this.options);
  }

  /**
   * Sends put requests
   *
   * @param {String} url - http url for api
   * @param {Object} requestParams - parameters to be sent with request
   *
   * @return {Observable} - response from the server
   */
  put(url: string, requestParams?: object) {
    this.setAuthorizationHeader();
    return this.http.put(url, requestParams, this.options);
  }

  /**
   * Sends delete requests
   *
   * @param {String} url - http url for api
   * @param {Object} requestParams - parameters to be sent with request
   *
   * @return {Observable} - response from the server
   */
  delete(url: string, requestParams?: object) {
    this.setAuthorizationHeader();
    return this.http.delete(url, this.options);
  }
}
