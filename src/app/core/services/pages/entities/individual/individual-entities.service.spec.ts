import { TestBed } from '@angular/core/testing';

import { IndividualEntitiesService } from './individual-entities.service';

describe('IndividualEntitiesService', () => {
  let service: IndividualEntitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualEntitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
