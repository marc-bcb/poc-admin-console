import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemUsersComponent } from './system-users.component';
import {ToolbarPortalService} from '../../../core/services/portal/toolbar-portal.service';

describe('SystemUsersComponent', () => {
  let component: SystemUsersComponent;
  let fixture: ComponentFixture<SystemUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemUsersComponent ],
      providers: [ToolbarPortalService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
