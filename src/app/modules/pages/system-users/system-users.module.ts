import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemUsersComponent} from './system-users.component';
import {PortalModule} from '@angular/cdk/portal';
import {SystemUsersService} from '../../../core/services/system/users/system-users.service';
import {LoaderModule} from '../../../core/components/loader/loader.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [SystemUsersComponent],
  imports: [
    CommonModule,
    PortalModule,
    LoaderModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatToolbarModule
  ],
  providers: [
    SystemUsersService
  ]
})
export class SystemUsersModule {
}
