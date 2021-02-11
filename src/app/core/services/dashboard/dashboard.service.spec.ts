import {TestBed} from '@angular/core/testing';

import {DashboardService} from './dashboard.service';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {of} from 'rxjs';
import DoneCallback = jest.DoneCallback;

describe('DashboardService', () => {
  let service: DashboardService;
  let mockHttp: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ], providers: [
        DashboardService,
        {
          provide: HttpClient,
          useValue: {
            get: jest.fn()
          }
        }
      ]
    });
    service = TestBed.inject(DashboardService);
    mockHttp = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getDashboardData', () => {
    it('should return dashboard data', (done: DoneCallback) => {
      // prep
      const spy = jest.spyOn(mockHttp, 'get').mockImplementation(() => of(undefined));
      const query = {start_date: '2021-01-01', end_date: '2021-02-02'};
      const headers = new HttpHeaders().set('Content-Type', 'application/json');

      // execute
      service.getDashboardData(query)
        .subscribe(() => {

          // assert
          expect(spy).toHaveBeenCalledWith(`${environment.apiUrl}/entities/dashboard`,
            {
              params: query,
              headers
            });
          done();
        });
    });
  });
});
