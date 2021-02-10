import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemUsersComponent} from './system-users.component';
import {PortalModule} from '@angular/cdk/portal';


@NgModule({
  declarations: [SystemUsersComponent],
  imports: [
    CommonModule,
    PortalModule
  ]
})
export class SystemUsersModule {
}
