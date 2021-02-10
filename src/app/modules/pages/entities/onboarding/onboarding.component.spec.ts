import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OnboardingComponent} from './onboarding.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {EntityCardModule} from '../../../../core/components/entity-card/entity-card.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PortalModule} from '@angular/cdk/portal';
import {MatInputModule} from '@angular/material/input';
import {ToolbarPortalService} from '../../../../core/services/portal/toolbar-portal.service';

describe('OnboardingComponent', () => {
  let component: OnboardingComponent;
  let fixture: ComponentFixture<OnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnboardingComponent],
      imports: [
        NoopAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        EntityCardModule,
        MatPaginatorModule,
        PortalModule,
        MatInputModule
      ], providers: [
        ToolbarPortalService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
