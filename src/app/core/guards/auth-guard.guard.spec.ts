import {TestBed} from '@angular/core/testing';
import {AuthGuard} from './auth-guard.service';
import {of} from 'rxjs';
import {AuthService} from '../services/auth/auth.service';

describe('AuthGuardGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: AuthService,
        useValue: {
          isAuthenticated: jest.fn(() => of(true))
        }
      }]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
