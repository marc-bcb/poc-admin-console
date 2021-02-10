import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners.component';
import {PortalModule} from '@angular/cdk/portal';



@NgModule({
  declarations: [PartnersComponent],
  imports: [
    CommonModule,
    PortalModule
  ]
})
export class PartnersModule { }
