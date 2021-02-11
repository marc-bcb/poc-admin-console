import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DashboardComponent} from './dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {PortalModule} from '@angular/cdk/portal';
import {ToolbarPortalService} from '../../../core/services/portal/toolbar-portal.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {LoaderModule} from '../../../core/components/loader/loader.module';
import {RouterTestingModule} from '@angular/router/testing';
import {DashboardService} from '../../../core/services/dashboard/dashboard.service';
import {HttpClientModule} from '@angular/common/http';
import {DashboardDataModel} from './models/dashboard-data.model';
import {of} from 'rxjs';
import {DateUtil} from '../../../core/utils/date.util';
import {ChartDataModel} from './models/chart-data.model';

import moment from 'moment';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let mockDashboardService: DashboardService;
  let mockToolbarPortalService: ToolbarPortalService;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule,
        MatCardModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatTableModule,
        MatInputModule,
        MatPaginatorModule,
        MatButtonModule,
        PortalModule,
        LoaderModule
      ], providers: [
        ToolbarPortalService,
        MatDatepickerModule,
        {
          provide: DashboardService,
          useValue: {
            getDashboardData: jest.fn(() => of(TestMockData.dashboardData))
          }
        },
        {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    mockDashboardService = TestBed.inject(DashboardService);
    mockToolbarPortalService = TestBed.inject(ToolbarPortalService);
    component.portalContent.detach = jest.fn();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call invoke loadDashboardData', () => {
      // prep
      const spy = jest.spyOn(component, 'loadDashboardData');

      // execute
      component.ngOnInit();

      // assert
      expect(spy).toHaveBeenCalled();
    });

    it('should post a portal to the toolbarPortalService', () => {
      // prep
      const spy = jest.spyOn(mockToolbarPortalService, 'setPortal');

      // execute
      component.ngOnInit();

      // assert
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('loadDashboardData', () => {
    it('should invoke the dashboard service to get Dashboard data', () => {
      // prep
      const spy = jest.spyOn(mockDashboardService, 'getDashboardData');
      // execute
      component.loadDashboardData();
      // assert
      expect(spy).toHaveBeenCalledWith({
        start_date: component.startDate.format(DateUtil.DATE_FORMAT),
        end_date: component.endDate.format(DateUtil.DATE_FORMAT)
      });
    });

    it('should store start and end date to session storage', () => {
      // prep
      const spy = jest.spyOn(window.sessionStorage.__proto__, 'setItem');
      // execute
      component.loadDashboardData();
      // assert
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenCalledWith('dashboardStartDate', component.startDate.toLocaleString());
      expect(spy).toHaveBeenCalledWith('dashboardEndDate', component.endDate.toLocaleString());
    });

    it('should format the dashboard data for chart usage', () => {
      // prep
      component.chartData = undefined;
      component.startDate = moment().subtract(2, 'days');
      component.endDate = moment();
      // execute
      component.loadDashboardData();
      // assert
      expect(component.chartData).toEqual(TestMockData.chartData);
    });

    it('should populate datasource', () => {
      // prep
      component.startDate = moment().subtract(2, 'days');
      component.endDate = moment();
      // execute
      component.loadDashboardData();
      // assert
      expect(component.dataSource.data).toEqual(TestMockData.dashboardData);
    });
  });

  describe('getEntityStatus', () => {
    it('should return status for rejected', () => {
      // prep
      const data: DashboardDataModel = {...TestMockData.blankDashboardData};
      data.entity_status = 'rejected';
      // execute
      const out = component.getEntityStatus(data);
      // assert
      expect(out).toEqual('Rejected');
    });

    it('should return status for approved', () => {
      // prep
      const data: DashboardDataModel = {...TestMockData.blankDashboardData};
      data.entity_approved = true;
      // execute
      const out = component.getEntityStatus(data);
      // assert
      expect(out).toEqual('Approved');
    });

    it('should return status for completed', () => {
      // prep
      const data: DashboardDataModel = {...TestMockData.blankDashboardData};
      data.entity_completed = new Date();
      // execute
      const out = component.getEntityStatus(data);
      // assert
      expect(out).toEqual('Completed');
    });

    it('should return status for started', () => {
      // prep
      const data: DashboardDataModel = {...TestMockData.blankDashboardData};
      data.entity_started = new Date();
      // execute
      const out = component.getEntityStatus(data);
      // assert
      expect(out).toEqual('Started');
    });

    it('should return status for default', () => {
      // prep
      const data: DashboardDataModel = {...TestMockData.blankDashboardData};
      // execute
      const out = component.getEntityStatus(data);
      // assert
      expect(out).toEqual('Invited');
    });
  });

  describe('ngOnDestroy', () => {
    it('should detach portal', () => {
      component.portalContent.detach = jest.fn();
      component.ngOnDestroy();
      expect(component.portalContent.detach).toHaveBeenCalledTimes(1);
    });

    it('should unsubscribe from all subscriptions', () => {
      component.portalContent.detach = jest.fn();
      component.subscriptions.unsubscribe = jest.fn();
      component.ngOnDestroy();
      expect(component.subscriptions.unsubscribe).toHaveBeenCalledTimes(1);
    });
  });
});

class TestMockData {
  static dashboardData: Array<DashboardDataModel> = [{
    entity_id: '100',
    entity_status: 'onboarding',
    entity_type: 'corporate',
    entity_first_name: 'test',
    entity_last_name: 'test',
    entity_email: 'test@test.io',
    entity_mobile: '+447400123456',
    entity_entity_name: 'test',
    entity_approved: true,
    entity_created_at: moment().subtract(2, 'days').toDate(),
    entity_started: moment().subtract(2, 'days').toDate(),
    entity_completed: moment().subtract(1, 'day').toDate()
  }, {
    entity_id: '101',
    entity_status: 'rejected',
    entity_type: 'corporate',
    entity_first_name: 'asd',
    entity_last_name: 'asd',
    entity_email: 'test@test.io',
    entity_mobile: '+447400123456',
    entity_entity_name: 'asd',
    entity_approved: false,
    entity_created_at: moment().subtract(2, 'days').toDate(),
    entity_started: moment().subtract(2, 'days').toDate(),
    entity_completed: null
  }, {
    entity_id: '102',
    entity_status: 'onboarding',
    entity_type: 'corporate',
    entity_first_name: 'qwe',
    entity_last_name: 'qwe',
    entity_email: 'test@test.io',
    entity_mobile: '+447400123456',
    entity_entity_name: 'qwe',
    entity_approved: false,
    entity_created_at: moment().toDate(),
    entity_started: moment().toDate(),
    entity_completed: null
  }, {
    entity_id: '103',
    entity_status: 'onboarding',
    entity_type: 'corporate',
    entity_first_name: 'qwe',
    entity_last_name: 'qwe',
    entity_email: 'test@test.io',
    entity_mobile: '+447400123456',
    entity_entity_name: 'qwe',
    entity_approved: false,
    entity_created_at: moment().toDate(),
    entity_started: moment().toDate(),
    entity_completed: moment().toDate()
  }];

  static blankDashboardData: DashboardDataModel = {
    entity_id: '',
    entity_status: '',
    entity_type: '',
    entity_first_name: '',
    entity_last_name: '',
    entity_email: '',
    entity_mobile: '',
    entity_entity_name: '',
    entity_approved: false,
    entity_created_at: moment().toDate(),
    entity_started: undefined,
    entity_completed: undefined
  };

  static chartData: ChartDataModel = {
    approved: 1,
    completed: 2,
    data: {
      invited: [2, 0],
      completed: [0, 1],
      started: [2, 0]
    },
    notCompleted: 2,
    rejected: 1,
    started: 4,
    total: 4
  };
}
