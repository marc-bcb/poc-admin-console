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
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {DashboardService} from '../../../core/services/entities/dashboard/dashboard.service';
import {HttpClientModule} from '@angular/common/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
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
        DashboardService,
        {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
