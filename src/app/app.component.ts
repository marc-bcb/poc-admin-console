import {Component} from '@angular/core';
import {SideNavModel} from './core/components/sidenav/models/side-nav.model';
import {SIDE_NAV_MODEL} from './app.const';
import {AuthService} from './core/services/auth/auth.service';

@Component({
  selector: 'bcb-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideNavConfig: SideNavModel = SIDE_NAV_MODEL;
  loading: boolean;

  constructor(private readonly authService: AuthService) {
    this.authService.isAuthenticated().subscribe((res: boolean) => this.loading = !res);
  }

  logout(): void {
    this.authService.logout();
  }
}
