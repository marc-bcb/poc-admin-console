import {Injectable} from '@angular/core';
import {EntityResponseModel} from './models/entity-response.model';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EntitiesRequestModel} from './models/entities-request.model';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private readonly http: HttpClient) {
  }

  getEntities(payload: EntitiesRequestModel): Observable<EntityResponseModel> {
    return this.http.get<EntityResponseModel>(`${environment.apiUrl}/entities`, {
      params: {...payload},
      headers: this.headers
    });
  }
}
