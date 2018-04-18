import { AlertService } from './alert.service';
import { ErrorService } from './error.service';
import { HttpService } from './http.service';
import { Http, HttpModule, BaseRequestOptions, ConnectionBackend, XHRBackend } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import {MockBackend} from '@angular/http/testing';

import { TestBed, inject } from '@angular/core/testing';

import { ItemsService } from './items.service';
import { AuthService } from './auth.service';

describe('ItemsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule, RouterTestingModule],
            providers: [
                BaseRequestOptions,
                MockBackend,
                ItemsService,
                HttpService,
                AuthService,
                ErrorService,
                AlertService,
                {
                    provide: Http,
                    useFactory: (backend: XHRBackend,
                        defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }, deps: [MockBackend, BaseRequestOptions]
                },
            ]
        });
    });

    it('should be created', inject([ItemsService], (service: ItemsService) => {
        expect(service).toBeTruthy();
    }));
});
