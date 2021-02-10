import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndividualEntitiesComponent} from './individual-entities.component';
import {EntityCardModule} from '../../../../core/components/entity-card/entity-card.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CdkPortal, PortalModule} from '@angular/cdk/portal';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [IndividualEntitiesComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    EntityCardModule,
    MatPaginatorModule,
    PortalModule,
    MatInputModule
  ]
})
export class IndividualEntitiesModule {
}
