import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CdkPortal} from '@angular/cdk/portal';
import {ToolbarPortalService} from '../../../core/services/portal/toolbar-portal.service';

@Component({
  selector: 'bcb-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit, OnDestroy {

  @ViewChild(CdkPortal, {static: true}) portalContent: CdkPortal;

  constructor(private readonly toolbarPortalService: ToolbarPortalService) { }

  ngOnInit(): void {
    this.toolbarPortalService.setPortal(this.portalContent);
  }

  ngOnDestroy(): void {
    this.portalContent?.detach();
  }

}
