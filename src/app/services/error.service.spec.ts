import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';
import { AlertService } from './alert.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, inject } from '@angular/core/testing';

import { ErrorService } from './error.service';

describe('ErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpModule, RouterTestingModule],
      providers: [ErrorService, AlertService, AuthService]
    });
  });

  it('should be created', inject([ErrorService], (service: ErrorService) => {
    expect(service).toBeTruthy();
  }));
});
