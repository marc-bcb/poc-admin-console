import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EntitiesRequestModel} from '../models/entities-request.model';
import {Observable} from 'rxjs';
import {EntityResponseModel} from '../models/entity-response.model';
import {environment} from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CorporateEntitiesService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private readonly http: HttpClient) {
  }

  getCorporateEntities(payload: EntitiesRequestModel): Observable<EntityResponseModel> {
    return this.http.get<EntityResponseModel>(`${environment.apiUrl}/entities/corporates`, {
      params: {...payload},
      headers: this.headers
    });
  }
}
