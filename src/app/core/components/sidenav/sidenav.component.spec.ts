import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SidenavComponent} from './sidenav.component';
import {MediaMatcher} from '@angular/cdk/layout';
import {ToolbarPortalService} from '../../services/portal/toolbar-portal.service';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {PortalModule} from '@angular/cdk/portal';
import {RouterTestingModule} from '@angular/router/testing';
import {ChangeDetectorRef} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SideNavModel} from './models/side-nav.model';
import {APP_ROUTES} from '../../../app.const';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavComponent],
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        MatButtonModule,
        MatToolbarModule,
        MatDividerModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatExpansionModule,
        MatMenuModule,
        PortalModule
      ],
      providers: [
        ChangeDetectorRef,
        MediaMatcher,
        ToolbarPortalService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    component.config = TestMockData.CONFIG_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('navExpanseClick', () => {
    it('should toggle miniNav', () => {
      // prep
      component.miniNav = false;

      // execute
      component.navExpanseClick();

      // assert
      expect(component.miniNav).toBe(true);
    });

    it('should toggle autoSize', () => {
      // prep
      jest.useFakeTimers();

      // execute
      component.navExpanseClick();

      // assert
      expect(component.autosize).toBe(true);
      expect(setTimeout).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(1);
      expect(component.autosize).toBe(false);
    });
  });
});

class TestMockData {
  static CONFIG_MOCK: SideNavModel = {
    navItemsGroups: [{
      title: undefined,
      navItems: [{
        title: 'Dashboard',
        location: `/${APP_ROUTES.DASHBOARD}`,
        icon: 'show_chart'
      }]
    }, {
      title: 'Administration',
      navItems: [{
        title: 'System',
        icon: 'settings_suggest',
        children: [{
          title: 'System users',
          location: `/${APP_ROUTES.SYSTEM_USERS}`,
          icon: 'group'
        }]
      }]
    }],
    companyLogo: 'assets/logo.png',
    expandIcon: 'double_arrow'
  };
}
