import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';
import {SystemUserModel} from '../../../models/system-user.model';

@Injectable({
  providedIn: 'root'
})
export class SystemUsersService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private readonly http: HttpClient) {
  }

  getSystemUsers(): Observable<SystemUserModel[]> {
    return this.http.get<SystemUserModel[]>(`${environment.apiUrl}/systems/users`, {
      headers: this.headers
    });
  }

  getSystemUser(systemUserId: string): Observable<SystemUserModel> {
    return this.http.get<SystemUserModel>(`${environment.apiUrl}/systems/users/${systemUserId}`, {
      headers: this.headers
    });
  }

  addSystemUser(systemUser: SystemUserModel): Observable<SystemUserModel> {
    return this.http.post<SystemUserModel>(`${environment.apiUrl}/systems/users/`, systemUser);
  }

  updateSystemUser(systemUser: SystemUserModel): Observable<SystemUserModel> {
    return this.http.put<SystemUserModel>(`${environment.apiUrl}/systems/users/${systemUser.id}`, systemUser);
  }
}
