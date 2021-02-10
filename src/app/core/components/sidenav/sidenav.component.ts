import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {SideNavModel} from './models/side-nav.model';
import {PortalTypes, ToolbarPortalService} from '../../services/portal/toolbar-portal.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'bcb-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() config: SideNavModel;
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();

  toolbarPortal$: Observable<PortalTypes>;

  mobileQuery: MediaQueryList;

  miniNav = false;
  navItemHover = false;
  autosize = false;

  private readonly _queryListener: () => void;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef,
              private readonly media: MediaMatcher,
              private readonly toolbarPortalService: ToolbarPortalService) {
    this.mobileQuery = media.matchMedia('(max-width: 750px)');
    this._queryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._queryListener);
  }

  ngOnInit(): void {
    this.toolbarPortal$ = this.toolbarPortalService.toolbarPortal$;
  }

  navExpanseClick(): void {
    this.miniNav = !this.miniNav;
    this.autosize = true;
    setTimeout(() => this.autosize = false, 1);
  }

}
