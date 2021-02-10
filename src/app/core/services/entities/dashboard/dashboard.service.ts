import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';
import {DashboardDataModel} from '../../../../modules/pages/dashboard/models/dashboard-data.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private readonly http: HttpClient) {
  }

  getDashboardData(query: { start_date: string, end_date: string }): Observable<DashboardDataModel[]> {
    return this.http.get<DashboardDataModel[]>(`${environment.apiUrl}/entities/dashboard`, {
      params: query,
      headers: this.headers
    });
  }
}
