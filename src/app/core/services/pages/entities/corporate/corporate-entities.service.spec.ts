import { TestBed } from '@angular/core/testing';

import { CorporateEntitiesService } from './corporate-entities.service';

describe('CorporateEntitiesService', () => {
  let service: CorporateEntitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorporateEntitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
