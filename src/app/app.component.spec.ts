import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SidenavModule} from './core/components/sidenav/sidenav.module';
import {DashboardModule} from './modules/pages/dashboard/dashboard.module';
import {OnboardingModule} from './modules/pages/entities/onboarding/onboarding.module';
import {CorporateEntitiesModule} from './modules/pages/entities/corporate-entities/corporate-entities.module';
import {IndividualEntitiesModule} from './modules/pages/entities/individual-entities/individual-entities.module';
import {FormBuilder} from '@angular/forms';
import {ToolbarPortalService} from './core/services/portal/toolbar-portal.service';
import {AuthService} from './core/services/auth/auth.service';
import {of} from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        NoopAnimationsModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        SidenavModule,
        DashboardModule,
        OnboardingModule,
        CorporateEntitiesModule,
        IndividualEntitiesModule
      ],
      providers: [
        FormBuilder,
        ToolbarPortalService,
        {
          provide: AuthService,
          useValue: {
            isAuthenticated: jest.fn(() => of(true))
          }
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
