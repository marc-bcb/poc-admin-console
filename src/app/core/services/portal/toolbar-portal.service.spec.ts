import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PortalTypes, ToolbarPortalService} from './toolbar-portal.service';
import {CdkPortal, PortalModule} from '@angular/cdk/portal';
import {Component, ViewChild} from '@angular/core';
import DoneCallback = jest.DoneCallback;

describe('ToolbarPortalService', () => {
  let component: PortalTestAppComponent;
  let fixture: ComponentFixture<PortalTestAppComponent>;
  let service: ToolbarPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PortalTestAppComponent
      ],
      imports: [
        PortalModule
      ],
      providers: [
        ToolbarPortalService,
      ]
    });
    fixture = TestBed.createComponent(PortalTestAppComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ToolbarPortalService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setPortal', () => {
    it('should invoke toolbarPortalSubject.next with the portal', (done: DoneCallback) => {
      /*
      * NOTE: Invoke the subject next function call after subscription to avoid `timeout` error
      */

      // prep
      fixture.detectChanges();
      const obj = fixture.componentInstance.portalContent;
      const portal = service.toolbarPortal$;

      portal.subscribe((data: PortalTypes) => {
          // assert
          expect(data).toBeDefined();
          done();
        }
      );

      // execute
      service.setPortal(obj);
    });
  });
});

@Component({
  selector: 'bcb-portal-test',
  template: `
    <ng-container *cdkPortal>
      <div>
        test
      </div>
    </ng-container>`,
})
export class PortalTestAppComponent {
  @ViewChild(CdkPortal, {static: true}) portalContent: CdkPortal;
}
