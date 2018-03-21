import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';
import { TestBed, inject } from '@angular/core/testing';

import { CategoryService } from './category.service';

describe('CategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [CategoryService, HttpService]
    });
  });

  it('should be created', inject([CategoryService], (service: CategoryService) => {
    expect(service).toBeTruthy();
  }));
});
