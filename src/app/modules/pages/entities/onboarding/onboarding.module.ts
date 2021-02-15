import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OnboardingComponent} from './onboarding.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {EntityCardModule} from '../../../../core/components/entity-card/entity-card.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PortalModule} from '@angular/cdk/portal';
import {MatInputModule} from '@angular/material/input';
import {NotificationModule} from '../../../../core/services/notification/notification.module';

@NgModule({
  declarations: [OnboardingComponent],
  imports: [
    CommonModule,
    NotificationModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    EntityCardModule,
    MatPaginatorModule,
    PortalModule,
    MatInputModule
  ]
})
export class OnboardingModule {
}
