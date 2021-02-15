import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CdkPortal} from '@angular/cdk/portal';
import {ToolbarPortalService} from '../../../core/services/portal/toolbar-portal.service';
import {PartnerService} from '../../../core/services/partners/partner.service';
import {PartnerModel} from '../../../core/models/Partners/partner.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'bcb-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit, OnDestroy {

  @ViewChild(CdkPortal, {static: true}) portalContent: CdkPortal;
  partners: Array<PartnerModel> = [];
  subscriptions: Subscription = new Subscription();

  constructor(private readonly toolbarPortalService: ToolbarPortalService,
              private readonly partnerService: PartnerService) {
  }

  ngOnInit(): void {
    this.toolbarPortalService.setPortal(this.portalContent);
    this.subscriptions.add(this.partnerService.getAllPartners()
      .subscribe((partners: Array<PartnerModel>) => {
        this.partners = partners;
      }));
  }

  ngOnDestroy(): void {
    this.portalContent?.detach();
    this.subscriptions.unsubscribe();
  }

}
