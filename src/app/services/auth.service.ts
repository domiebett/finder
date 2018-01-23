import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../environments/environment';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  authBaseUrl: string;
  currentUser;
  currentUserChange: Subject<string> = new Subject<string>();

  constructor(private http: Http) {
    this.authBaseUrl = `${environment.apiBaseUrl}/auth`;
  }

  /**
   * Get data from observable or if none then return empty array
   *
   * @return {array}
   */
  extractData(res: Response) {
    const body = res.json();
    return body || [];
  }

  /**
   * Send login request to api
   *
   * @param {Object} formValue - with email and password
   *
   * @return {Observable}
   */
  login(formValue) {
    return this.http.post(`${this.authBaseUrl}/login`, formValue)
      .map((response) => {
        const authResponse = response.json();
        localStorage.setItem('authToken', authResponse.token);
        localStorage.setItem('user', JSON.stringify(authResponse.user));
        this.setCurrentUser();
        return authResponse;
      });
  }

  /**
   * Send register request to api
   *
   * @param {Object} formValue - with name, email and password
   *
   * @return {Observable}
   */
  register(formValue) {
    return this.http.post(`${this.authBaseUrl}/register`, formValue)
      .map(response => {
        const authResponse = response.json();
        localStorage.setItem('authToken', authResponse.token);
        localStorage.setItem('user', JSON.stringify(authResponse.user));
        this.setCurrentUser();
      });
  }

  /**
   * Clears the token and user from local storage.
   *
   * @return {void}
   */
  logout() {
    localStorage.clear();
    this.setCurrentUser();
  }

  /**
   * Gets the currently logged in user
   *
   * @return {JSON} currentUser.
   */
  getCurrentUser() {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const currentUser = storedUser ? storedUser : null;
    return currentUser;
  }

  /**
   * Retrieves current user from local storage and sets to the property.
   */
  setCurrentUser() {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    this.currentUser = storedUser ? storedUser : null;
    this.currentUserChange.next(this.currentUser);
  }
}
