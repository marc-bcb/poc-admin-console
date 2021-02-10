import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CdkPortal} from '@angular/cdk/portal';
import {ToolbarPortalService} from '../../../core/services/portal/toolbar-portal.service';

@Component({
  selector: 'bcb-system-users',
  templateUrl: './system-users.component.html',
  styleUrls: ['./system-users.component.scss']
})
export class SystemUsersComponent implements OnInit, OnDestroy {

  @ViewChild(CdkPortal, {static: true}) portalContent: CdkPortal;

  constructor(private readonly toolbarPortalService: ToolbarPortalService) {
  }

  ngOnInit(): void {
    this.toolbarPortalService.setPortal(this.portalContent);
  }

  ngOnDestroy(): void {
    this.portalContent?.detach();
  }

}
