import { RequestOptions, Http, HttpModule } from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [AuthService, HttpModule, Headers, Cookie]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
