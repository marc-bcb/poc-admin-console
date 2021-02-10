import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CdkPortal} from '@angular/cdk/portal';
import {EntityCardModel} from '../../../../core/components/entity-card/models/entity-card.model';
import {MOCK_ENTITIES} from '../onboarding/MockData/entities.mock';
import {ToolbarPortalService} from '../../../../core/services/portal/toolbar-portal.service';
import {PageEvent} from '@angular/material/paginator';
import {EntitySearchUtil} from '../utils/search.util';

@Component({
  selector: 'bcb-individual-entities',
  templateUrl: './individual-entities.component.html',
  styleUrls: ['./individual-entities.component.scss']
})
export class IndividualEntitiesComponent implements OnInit, OnDestroy {

  @ViewChild(CdkPortal, {static: true}) portalContent: CdkPortal;

  rawIndividualEntities: Array<EntityCardModel> = MOCK_ENTITIES;
  individualEntities: Array<EntityCardModel> = [];
  individualEntitiesSearchResults: Array<EntityCardModel>;

  totalItems: number = this.rawIndividualEntities.length;
  itemsPerPage = 5;
  pageSizeOptions = [2, 5, 7, 10];

  currentPageIndex = 0;
  currentPageLength = 0;

  constructor(private readonly toolbarPortalService: ToolbarPortalService) {
    // TODO: Implement service call to get page data
    this.individualEntities = this.rawIndividualEntities
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
    this.individualEntities =
      this.individualEntitiesSearchResults?.slice(event.pageIndex * event.pageSize, (event.pageIndex * event.pageSize) + event.pageSize)
      ?? this.rawIndividualEntities.slice(event.pageIndex * event.pageSize, (event.pageIndex * event.pageSize) + event.pageSize);
  }

  onSearch(term: string): void {
    if (term && term.length > 0) {
      this.individualEntitiesSearchResults = EntitySearchUtil.fuzzySearch(this.rawIndividualEntities, term);
    } else {
      this.individualEntitiesSearchResults = undefined;
    }
    this.onPageChange({pageIndex: this.currentPageIndex, pageSize: this.itemsPerPage, length: this.currentPageLength});
    this.totalItems = this.individualEntitiesSearchResults?.length ?? this.rawIndividualEntities?.length;
  }

  onButtonClick(text: string): void {
    console.log({buttonClick: text});
  }

}
