import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {AuthService as Auth0Service} from '@auth0/auth0-angular';
import {HttpClientModule} from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        {
          provide: Auth0Service,
          useValue: {}
        }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
