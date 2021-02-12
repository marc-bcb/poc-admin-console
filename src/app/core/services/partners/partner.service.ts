import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {PartnerModel} from '../../models/Partners/partner.model';
import {PartnerSettingModel} from '../../models/Partners/partner-setting.model';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private readonly http: HttpClient) {
  }

  getAllPartners(): Observable<PartnerModel[]> {
    return this.http.get<any>(`${environment.apiUrl}/partners`);
  }

  getPartner(id: string): Observable<PartnerModel> {
    return this.http.get<any>(`${environment.apiUrl}/partners/${id}`);
  }

  getPartnerSetting(id: string): Observable<PartnerSettingModel> {
    return this.http.get<any>(`${environment.apiUrl}/partners/settings/${id}`);
  }

  updatePartner(partner: PartnerModel): Observable<PartnerModel> {
    return this.http.put<any>(`${environment.apiUrl}/partners/${partner.id}`, partner);
  }

  updatePartnerSetting(partnerSetting: PartnerSettingModel): Observable<PartnerSettingModel> {
    return this.http.put<any>(`${environment.apiUrl}/partners/settings/${partnerSetting.partner_id}`, partnerSetting);
  }
}
