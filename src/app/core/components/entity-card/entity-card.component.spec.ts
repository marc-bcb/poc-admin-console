import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EntityCardComponent} from './entity-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MOCK_ENTITIES} from '../../../modules/pages/entities/onboarding/MockData/entities.mock';
import {EntityCardModel} from './models/entity-card.model';

describe('EntityCardComponent', () => {
  let component: EntityCardComponent;
  let fixture: ComponentFixture<EntityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityCardComponent],
      imports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityCardComponent);
    component = fixture.componentInstance;
    component.entity = TestMockData.MOCK_ENTITY;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class TestMockData {
  static MOCK_ENTITY: EntityCardModel = {
    cNumber: 'C0000000001',
    name: 'Entity 1',
    details: [
      {type: 'email', value: '1@test.com'},
      {type: 'phone', value: '07400123456'},
      {type: 'place', value: 'Somewhere'},
      {type: 'group', value: 'BCB Prime'}
    ],
    profileId: '0000-0000-0000-0001',
    flags: [
      {value: 'Onboarding', type: 'Onboarding', status: 'in-progress'},
      {value: 'Can trade', type: 'trade', status: 'success'},
      {value: 'High risk', type: 'risk', status: 'danger'},
      {value: 'Onfido > unknown', type: 'completion', status: 'unknown'},
      {value: 'Completed: 01 Jan 2021', type: 'completion'}
    ]
  };
}
