import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {AuthService as Auth0Service} from '@auth0/auth0-angular';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {of} from 'rxjs';
import {SystemUserModel} from '../../models/system-user.model';
import DoneCallback = jest.DoneCallback;


describe('AuthService', () => {
  let service: AuthService;
  let mockAuth0Service: Auth0Service;
  let mockHttp: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        {
          provide: Auth0Service,
          useValue: {
            isAuthenticated$: of(true),
            loginWithRedirect: jest.fn(),
            logout: jest.fn(),
            user$: of({test: 'yes'})
          }
        },
        {
          provide: HttpClient,
          useValue: {
            get: jest.fn()
          }
        }
      ]
    });
    service = TestBed.inject(AuthService);
    mockAuth0Service = TestBed.inject(Auth0Service);
    mockHttp = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isAuthenticated', () => {
    it('should call auth0 service to retrieve authentication', (done: DoneCallback) => {
      // prep

      // execute
      service.isAuthenticated().subscribe((res: boolean) => {
        // assert
        expect(res).toBe(true);
        done();
      });
    });

    it('should call getAuth0User()', (done: DoneCallback) => {
      // prep
      const spy = jest.spyOn(service, 'getAuth0User');
      // execute
      service.isAuthenticated().subscribe(() => {
        // assert
        expect(spy).toHaveBeenCalledWith();
        done();
      });
    });

    it('should call getSystemUser()', (done: DoneCallback) => {
      // prep
      service.getAuth0User = jest.fn(() => of({test: 'yes'}));
      const spy = jest.spyOn(service, 'getSystemUser');
      // execute
      service.isAuthenticated().subscribe(() => {
        // assert
        expect(spy).toHaveBeenCalledWith();
        done();
      });
    });
  });

  describe('auth0Login', () => {
    it('should call auth0 service with no arguments', () => {
      // prep
      const spy = jest.spyOn(mockAuth0Service, 'loginWithRedirect');

      // Execute
      service.auth0Login();

      // Assert
      expect(spy).toHaveBeenCalledWith();
    });
  });

  describe('logout', () => {
    it('should call auth0 service to logout without arguments', () => {
      // prep
      const spy = jest.spyOn(mockAuth0Service, 'logout');

      // execute
      service.logout();

      // assert
      expect(spy).toHaveBeenCalledWith();
    });

    it('should call removeUserToken()', () => {
      // prep
      const spy = jest.spyOn(service, 'removeUserToken');

      // execute
      service.logout();

      // assert
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('getAuth0User', () => {
    it('should call auth0 service to retrieve user details', (done: DoneCallback) => {
      // prep

      // execute
      service.getAuth0User().subscribe((res: any) => {
        // assert
        expect(res).toBeDefined();
        done();
      });
    });

    it('should call saveUpdateAuth0User()', (done: DoneCallback) => {
      // prep
      const spy = jest.spyOn(service, 'saveUpdateAuth0User');
      // execute
      service.getAuth0User().subscribe((res: any) => {
        // assert
        expect(spy).toHaveBeenCalledWith(res);
        done();
      });
    });
  });

  describe('getSystemUser', () => {
    it('should get system user from local storage', (done: DoneCallback) => {
      // prep
      jest.spyOn(window.localStorage.__proto__, 'getItem').mockImplementation((key: string) => JSON.stringify(TestMockData.lsSystemUser));

      // execute
      service.getSystemUser()
        .subscribe((res: SystemUserModel) => {

          // assert
          expect(res).toEqual(TestMockData.lsSystemUser);
          done();
        });
    });

    it('should get system user from service', (done: DoneCallback) => {
      // prep
      jest.spyOn(window.localStorage.__proto__, 'getItem').mockImplementation((key: string) => null);
      jest.spyOn(mockHttp, 'get').mockImplementation(() => of(TestMockData.httpSystemUser));

      // execute
      service.getSystemUser()
        .subscribe((res: SystemUserModel) => {

          // assert
          expect(res).toEqual(TestMockData.httpSystemUser);
          done();
        });
    });
  });

  describe('saveUpdateAuth0User', () => {
    it('should save Auth0 user to session storage', () => {
      // prep
      const spy = jest.spyOn(window.sessionStorage.__proto__, 'setItem');
      const obj = {test: 'yes'};
      const key = 'auth0User';
      const value = JSON.stringify(obj);

      // execute
      service.saveUpdateAuth0User(obj);

      // assert
      expect(spy).toHaveBeenCalledWith(key, value);
    });
  });

  describe('saveUpdateSystemUser', () => {
    it('should save system user to local storage', () => {
      // prep
      const spy = jest.spyOn(window.localStorage.__proto__, 'setItem');
      const obj = TestMockData.httpSystemUser;
      const key = 'consoleSystemUser';
      const value = JSON.stringify(obj);

      // execute
      service.saveUpdateSystemUser(obj);

      // assert
      expect(spy).toHaveBeenCalledWith(key, value);
    });
  });

  describe('removeUserToken', () => {
    it('should remove system user and user token from storage', () => {
      // prep
      const lsSpy = jest.spyOn(window.localStorage.__proto__, 'removeItem');
      const ssSpy = jest.spyOn(window.sessionStorage.__proto__, 'removeItem');
      const userTokenKey = 'userToken';
      const systemUserKey = 'consoleSystemUser';

      // execute
      service.removeUserToken();

      // assert
      expect(ssSpy).toHaveBeenCalledWith(userTokenKey);
      expect(lsSpy).toHaveBeenCalledWith(systemUserKey);
    });
  });
});

class TestMockData {
  static lsSystemUser: SystemUserModel = {
    id: 'localstorage',
    email: 'test@test.com',
    role: 'admin',
    status: 'foo',
    first_name: 'test first name',
    last_name: 'test last name',
    mobile: '1234567890',
  };

  static httpSystemUser: SystemUserModel = {
    id: 'httpUser',
    email: 'test@test.com',
    role: 'admin',
    status: 'foo',
    first_name: 'test first name',
    last_name: 'test last name',
    mobile: '1234567890',
  };
}
