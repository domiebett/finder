import { Injectable } from '@angular/core';
import {
  Http,
  XHRBackend,
  RequestOptions,
  Request,
  RequestOptionsArgs,
  Response,
  Headers,
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService extends Http {
  private token: string;

  static useFactory(backend: XHRBackend, options: RequestOptions) {
    return new HttpService(backend, options);
  }

  constructor (backend: XHRBackend, options: RequestOptions) {
    super(backend, options);
    this.token = localStorage.getItem('authToken');
    options.headers.set('Authorization', `Bearer ${this.token}`);
  }

  request(
    url: string|Request,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    if (typeof url === 'string') {
      if (!options) {
        options = {headers: new Headers()};
      }
      options.headers.set('Authorization', `Bearer ${this.token}`);
    } else {
      url.headers.set('Authorization', `Bearer ${this.token}`);
    }

    return super.request(url, options).catch(this.catchAuthenticationError(this));
  }

  private catchAuthenticationError (self: HttpService) {
    return (response: Response) => Observable.throw(response);
  }
}

