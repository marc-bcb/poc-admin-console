import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CorporateEntitiesComponent} from './corporate-entities.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {EntityCardModule} from '../../../../core/components/entity-card/entity-card.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PortalModule} from '@angular/cdk/portal';
import {MatInputModule} from '@angular/material/input';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarPortalService} from '../../../../core/services/portal/toolbar-portal.service';

describe('CorporateEntitiesComponent', () => {
  let component: CorporateEntitiesComponent;
  let fixture: ComponentFixture<CorporateEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateEntitiesComponent, ],
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
    fixture = TestBed.createComponent(CorporateEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
