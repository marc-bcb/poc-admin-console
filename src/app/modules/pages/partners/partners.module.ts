import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartnersComponent} from './partners.component';
import {PortalModule} from '@angular/cdk/portal';
import {PartnerService} from '../../../core/services/partners/partner.service';


@NgModule({
  declarations: [PartnersComponent],
  imports: [
    CommonModule,
    PortalModule
  ],
  providers: [
    PartnerService
  ]
})
export class PartnersModule {
}
