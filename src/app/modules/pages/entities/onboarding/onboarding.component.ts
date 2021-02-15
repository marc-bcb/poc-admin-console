import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {EntityCardModel} from '../../../../core/components/entity-card/models/entity-card.model';
import {PageEvent} from '@angular/material/paginator';
import {ToolbarPortalService} from '../../../../core/services/portal/toolbar-portal.service';
import {CdkPortal} from '@angular/cdk/portal';
import {MOCK_ENTITIES} from './MockData/entities.mock';
import {EntitySearchUtil} from '../utils/search.util';
import {SnackBarService} from '../../../../core/services/notification/snack-bar/snack-bar.service';

@Component({
  selector: 'bcb-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit, OnDestroy {

  @ViewChild(CdkPortal, {static: true}) portalContent: CdkPortal;

  rawOnboardingEntities: Array<EntityCardModel> = MOCK_ENTITIES;
  onboardingEntities: Array<EntityCardModel> = [];
  onboardingEntitiesSearchResults: Array<EntityCardModel>;

  totalItems: number = this.rawOnboardingEntities.length;
  itemsPerPage = 5;
  pageSizeOptions = [2, 5, 7, 10];

  currentPageIndex = 0;
  currentPageLength = 0;

  constructor(private readonly toolbarPortalService: ToolbarPortalService,
              private readonly snackbar: SnackBarService) {
    // TODO: Implement service call to get page data
    this.onboardingEntities = this.rawOnboardingEntities
      .slice(0, this.itemsPerPage);
  }

  ngOnInit(): void {
    this.toolbarPortalService.setPortal(this.portalContent);
  }

  ngOnDestroy(): void {
    this.portalContent?.detach();
  }

  onPageChange(event: PageEvent): void {
    this.currentPageIndex = event.pageIndex;
    this.currentPageLength = event.length;

    // TODO: Implement service call to fetch page data
    this.onboardingEntities =
      this.onboardingEntitiesSearchResults?.slice(event.pageIndex * event.pageSize, (event.pageIndex * event.pageSize) + event.pageSize)
      ?? this.rawOnboardingEntities.slice(event.pageIndex * event.pageSize, (event.pageIndex * event.pageSize) + event.pageSize);
  }

  onSearch(term: string): void {
    if (term && term.length > 0) {
      this.onboardingEntitiesSearchResults = EntitySearchUtil.fuzzySearch(this.rawOnboardingEntities, term);
    } else {
      this.onboardingEntitiesSearchResults = undefined;
    }
    this.onPageChange({pageIndex: this.currentPageIndex, pageSize: this.itemsPerPage, length: this.currentPageLength});
    this.totalItems = this.onboardingEntitiesSearchResults?.length ?? this.rawOnboardingEntities.length;
  }

  onButtonClick(text: string): void {
    switch (text) {
      case 'one':
        this.snackbar.showSnackBar(`Button clicked: ${text}`, {status: 'success'});
        break;
      case 'two':
        this.snackbar.showSnackBar(`Button clicked: ${text}`, {status: 'danger', horizontalPosition: 'start'});
        break;
      case 'three':
        this.snackbar.showSnackBar(`Button clicked: ${text}`, {status: 'warn', verticalPosition: 'bottom'});
        break;
      case 'four':
        this.snackbar.showSnackBar(`Button clicked: ${text}`, {
          dismissButtonLabel: 'Close 👋',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          msDuration: 3000
        });
        break;
    }
  }

}
