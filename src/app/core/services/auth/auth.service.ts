import {Injectable} from '@angular/core';
import {first, tap} from 'rxjs/operators';
import {AuthService as Auth0Service} from '@auth0/auth0-angular';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {SystemUserModel} from '../../models/system-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly auth0Service: Auth0Service,
              private readonly http: HttpClient) {
  }

  // Used in the auth guard
  isAuthenticated(): Observable<boolean> {
    return this.auth0Service.isAuthenticated$
      .pipe(
        tap((isAuthenticated: boolean) => {
          if (!isAuthenticated) {
            this.auth0Login();
          } else {
            // get auth token
            this.getAuth0User()
              .pipe(
                first((data: any) => !!data),
                tap(() => {
                  // get system user
                  this.getSystemUser()
                    .pipe(
                      first(data => !!data)
                    ).subscribe();
                }),
              ).subscribe();
          }
        })
      );
  }

  // Auth0 service calls
  auth0Login(): void {
    this.auth0Service.loginWithRedirect();
  }

  logout(): void {
    this.auth0Service.logout();
    this.removeUserToken();
  }

  getAuth0User(): Observable<any> {
    return this.auth0Service.user$.pipe(
      tap((user: any) => !!user && this.saveUpdateAuth0User(user))
    );
  }

  // BCB-services calls
  getSystemUser(): Observable<SystemUserModel> {
    const lsValue: string = localStorage.getItem('consoleSystemUser');
    const storedUser: SystemUserModel = JSON.parse(lsValue);

    if (storedUser) {
      return of(storedUser);
    }

    return this.http.get<SystemUserModel>(`${environment.authUrl}/admin/validate`).pipe(
      first(data => !!data),
      tap((systemUser: SystemUserModel) => this.saveUpdateSystemUser(systemUser))
    );
  }

  // Local/Session Storage
  saveUpdateAuth0User(user: any): void {
    sessionStorage.setItem('auth0User', JSON.stringify(user));
  }

  saveUpdateSystemUser(systemUser: SystemUserModel): void {
    localStorage.setItem('consoleSystemUser', JSON.stringify(systemUser));
  }

  removeUserToken(): void {
    sessionStorage.removeItem('userToken');
    localStorage.removeItem('consoleSystemUser');
  }
}
