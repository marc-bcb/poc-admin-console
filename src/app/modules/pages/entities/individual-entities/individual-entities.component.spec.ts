import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IndividualEntitiesComponent} from './individual-entities.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {EntityCardModule} from '../../../../core/components/entity-card/entity-card.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PortalModule} from '@angular/cdk/portal';
import {MatInputModule} from '@angular/material/input';
import {ToolbarPortalService} from '../../../../core/services/portal/toolbar-portal.service';

describe('IndividualEntitiesComponent', () => {
  let component: IndividualEntitiesComponent;
  let fixture: ComponentFixture<IndividualEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualEntitiesComponent],
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
    fixture = TestBed.createComponent(IndividualEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
