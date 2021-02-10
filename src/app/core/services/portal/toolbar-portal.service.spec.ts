import {TestBed} from '@angular/core/testing';

import {ToolbarPortalService} from './toolbar-portal.service';

describe('ToolbarPortalService', () => {
  let service: ToolbarPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ToolbarPortalService
      ]
    });
    service = TestBed.inject(ToolbarPortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
