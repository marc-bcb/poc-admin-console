import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './modules/pages/dashboard/dashboard.component';
import {APP_ROUTES} from './app.const';
import {OnboardingComponent} from './modules/pages/entities/onboarding/onboarding.component';
import {CorporateEntitiesComponent} from './modules/pages/entities/corporate-entities/corporate-entities.component';
import {IndividualEntitiesComponent} from './modules/pages/entities/individual-entities/individual-entities.component';
import {PartnersComponent} from './modules/pages/partners/partners.component';
import {SystemUsersComponent} from './modules/pages/system-users/system-users.component';
import {AuthGuard} from './core/guards/auth-guard.service';

const routes: Routes = [{
  path: 'auth/callback',
  pathMatch: 'full',
  redirectTo: ''
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'dashboard'
}, {
  path: APP_ROUTES.DASHBOARD,
  canActivate: [AuthGuard],
  component: DashboardComponent
}, {
  path: APP_ROUTES.ONBOARDING,
  canActivate: [AuthGuard],
  component: OnboardingComponent
}, {
  path: APP_ROUTES.CORPORATE_ENTITIES,
  canActivate: [AuthGuard],
  component: CorporateEntitiesComponent
}, {
  path: APP_ROUTES.INDIVIDUAL_ENTITIES,
  canActivate: [AuthGuard],
  component: IndividualEntitiesComponent
}, {
  path: APP_ROUTES.PARTNERS,
  canActivate: [AuthGuard],
  component: PartnersComponent
}, {
  path: APP_ROUTES.SYSTEM_USERS,
  canActivate: [AuthGuard],
  component: SystemUsersComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
