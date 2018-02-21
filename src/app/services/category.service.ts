import { environment } from './../../environments/environment';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategoryService {

  categoryBaseUrl: string;

  constructor(private http: HttpService) {
    this.categoryBaseUrl = `${environment.apiBaseUrl}/categories`;
  }

  /**
   * Gets all categories
  */
  getCategories() {
    return this.http.get(this.categoryBaseUrl)
      .map((response: Response) => response.json())
      .catch(error => Observable.throw(error.json()));
  }
}
