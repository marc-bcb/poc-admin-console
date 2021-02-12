import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CdkPortal} from '@angular/cdk/portal';
import {ToolbarPortalService, ToolbarPortalSubject} from '../../../core/services/portal/toolbar-portal.service';
import {SystemUserModel} from '../../../core/models/system-user.model';
import {SystemUsersService} from '../../../core/services/system/users/system-users.service';
import {Subscription} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'bcb-system-users',
  templateUrl: './system-users.component.html',
  styleUrls: ['./system-users.component.scss']
})
export class SystemUsersComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(CdkPortal, {static: true}) portalContent: CdkPortal;
  displayedColumns = ['first_name', 'last_name', 'email', 'status', 'actions'];
  dataSource: MatTableDataSource<SystemUserModel>;
  systemUsers: Array<SystemUserModel> = [];
  subscriptions: Subscription = new Subscription();
  loading: boolean;

  constructor(private readonly toolbarPortalService: ToolbarPortalService,
              private readonly systemUsersService: SystemUsersService) {
    this.dataSource = new MatTableDataSource(this.systemUsers);
  }

  ngOnInit(): void {
    this.toolbarPortalService.setPortal(this.portalContent, 'replace');
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loading = true;
    this.subscriptions.add(
      this.systemUsersService.getSystemUsers()
        .subscribe((systemUsers: Array<SystemUserModel>) => {
          this.loading = false;
          this.systemUsers = systemUsers;
          this.dataSource.data = systemUsers;
        })
    );

    this.subscriptions.add(
      // Navigate to the first page when the sort changes
      this.sort._stateChanges
        .subscribe(() => this.paginator.pageIndex = 0)
    );
  }

  ngOnDestroy(): void {
    this.portalContent?.detach();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
