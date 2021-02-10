import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PartnersComponent} from './partners.component';
import {ToolbarPortalService} from '../../../core/services/portal/toolbar-portal.service';

describe('PartnersComponent', () => {
  let component: PartnersComponent;
  let fixture: ComponentFixture<PartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartnersComponent],
      providers: [ToolbarPortalService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
