import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartnersComponent} from './partners.component';
import {PortalModule} from '@angular/cdk/portal';
import {PartnerService} from '../../../core/services/partners/partner.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [PartnersComponent],
  imports: [
    CommonModule,
    PortalModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    PartnerService
  ]
})
export class PartnersModule {
}
