import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {SideNavModel} from './models/side-nav.model';
import {PortalOperation, PortalTypes, ToolbarPortalService, ToolbarPortalSubject} from '../../services/portal/toolbar-portal.service';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'bcb-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() config: SideNavModel;
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();

  toolbarPortal: PortalTypes;
  toolbarPortalOperation: PortalOperation = 'append';

  mobileQuery: MediaQueryList;

  miniNav = false;
  navItemHover = false;
  autosize = false;
  date = new Date().toISOString();

  childActive: string;

  private readonly _queryListener: () => void;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef,
              private readonly media: MediaMatcher,
              private readonly toolbarPortalService: ToolbarPortalService,
              private readonly router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 750px)');
    this._queryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._queryListener);
  }

  ngOnInit(): void {
    this.toolbarPortalService.toolbarPortal$.subscribe((res: ToolbarPortalSubject) => {
      this.toolbarPortal = res.portal;
      this.toolbarPortalOperation = res.operation;
    });

    this.router.events
      .subscribe((event: RouterEvent) => {
        if (event instanceof NavigationEnd) {
          this.childActive = event.url.split('/')[1] ?? undefined;
        }
      });
  }

  navExpanseClick(): void {
    this.miniNav = !this.miniNav;
    this.autosize = true;
    setTimeout(() => this.autosize = false, 1);
  }

  onNewEntityClick(type: 'ind' | 'corp'): void {
    console.log({newEntity: type});
  }

}
