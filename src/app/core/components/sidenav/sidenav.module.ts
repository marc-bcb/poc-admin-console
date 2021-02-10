import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavComponent} from './sidenav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {PortalModule} from '@angular/cdk/portal';


@NgModule({
  declarations: [SidenavComponent],
  exports: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatMenuModule,
    PortalModule
  ]
})
export class SidenavModule {
}
