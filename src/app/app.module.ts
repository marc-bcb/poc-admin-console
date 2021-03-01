import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormBuilder} from '@angular/forms';
import {DashboardModule} from './modules/pages/dashboard/dashboard.module';
import {SidenavModule} from './core/components/sidenav/sidenav.module';
import {OnboardingModule} from './modules/pages/entities/onboarding/onboarding.module';
import {ToolbarPortalService} from './core/services/portal/toolbar-portal.service';
import {CorporateEntitiesModule} from './modules/pages/entities/corporate-entities/corporate-entities.module';
import {IndividualEntitiesModule} from './modules/pages/entities/individual-entities/individual-entities.module';
import {AuthModule} from '@auth0/auth0-angular';
import {environment} from '../environments/environment';
import {LoaderModule} from './core/components/loader/loader.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './core/services/auth/auth.service';
import {JwtInterceptor} from './core/interceptors/jwt.interceptor';
import {SystemUsersModule} from './modules/pages/system-users/system-users.module';
import {PartnersModule} from './modules/pages/partners/partners.module';
import {StoreModule} from './core/services/store/store.module';
import {EntitiesQueries} from './core/services/store/entities/entities.queries';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    StoreModule,

    // Auth0
    AuthModule.forRoot({
      domain: environment.auth0Domain,
      clientId: environment.auth0ClientId,
      redirect_uri: environment.auth0RedirectUri
    }),

    // Components
    LoaderModule,

    // Pages
    SidenavModule,
    DashboardModule,
    OnboardingModule,
    CorporateEntitiesModule,
    IndividualEntitiesModule,
    PartnersModule,
    SystemUsersModule
  ],
  providers: [
    FormBuilder,
    ToolbarPortalService,
    AuthService,
    EntitiesQueries,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
