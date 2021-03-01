import {Component} from '@angular/core';
import {SideNavModel} from './core/components/sidenav/models/side-nav.model';
import {SIDE_NAV_MODEL} from './app.const';
import {AuthService} from './core/services/auth/auth.service';
import {Store} from '@ngxs/store';
import {FetchAllEntities} from './core/services/store/entities/entities.actions';

@Component({
  selector: 'bcb-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideNavConfig: SideNavModel = SIDE_NAV_MODEL;
  loading: boolean;

  constructor(private readonly authService: AuthService,
              private readonly store: Store) {
    this.authService.isAuthenticated().subscribe((res: boolean) => this.loading = !res);
    this.store.dispatch(new FetchAllEntities(undefined));
  }

  logout(): void {
    this.authService.logout();
  }
}
