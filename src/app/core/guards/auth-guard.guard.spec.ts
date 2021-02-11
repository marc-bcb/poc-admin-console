import {TestBed} from '@angular/core/testing';
import {AuthGuard} from './auth-guard.service';
import {of} from 'rxjs';
import {AuthService} from '../services/auth/auth.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import DoneCallback = jest.DoneCallback;

describe('AuthGuardGuard', () => {
  let guard: AuthGuard;
  let mockAuthService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: AuthService,
        useValue: {
          isAuthenticated: jest.fn(() => of())
        }
      }]
    });
    guard = TestBed.inject(AuthGuard);
    mockAuthService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('canActivate', () => {
    it('should return true', (done: DoneCallback) => {
      // prep
      mockAuthService.isAuthenticated = jest.fn(() => of(true));
      // execute
      guard.canActivate(TestMockData.dummyRoute, TestMockData.fakeRouterState('/'))
        .subscribe((res: boolean) => {
          // assert
          expect(res).toBe(true);
          done();
        });
    });

    it('should return false', (done: DoneCallback) => {
      // prep
      mockAuthService.isAuthenticated = jest.fn(() => of(false));
      // execute
      guard.canActivate(TestMockData.dummyRoute, TestMockData.fakeRouterState('/'))
        .subscribe((res: boolean) => {
          // assert
          expect(res).toBe(false);
          done();
        });
    });
  });
});

class TestMockData {
  static dummyRoute = {} as ActivatedRouteSnapshot;

  static fakeRouterState(url: string): RouterStateSnapshot {
    return {
      url,
    } as RouterStateSnapshot;
  }
}
