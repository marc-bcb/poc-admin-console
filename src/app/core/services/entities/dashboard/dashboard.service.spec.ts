import {TestBed} from '@angular/core/testing';

import {DashboardService} from './dashboard.service';
import {HttpClientModule} from '@angular/common/http';

describe('EntitiesService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ], providers: [
        {
          provide: DashboardService,
          useValue: {}
        }
      ]
    });
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
