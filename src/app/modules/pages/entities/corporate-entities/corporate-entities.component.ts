import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CdkPortal} from '@angular/cdk/portal';
import {EntityCardModel} from '../../../../core/components/entity-card/models/entity-card.model';
import {ToolbarPortalService} from '../../../../core/services/portal/toolbar-portal.service';
import {PageEvent} from '@angular/material/paginator';
import {EntitySearchUtil} from '../utils/search.util';
import {EntitiesQueries} from '../../../../core/services/store/entities/entities.queries';
import {EntityCardTransformer} from '../../../../core/components/entity-card/utils/transform.util';
import {EntityModel} from '../../../../core/models/entity/entity.model';

@Component({
  selector: 'bcb-corporate-entities',
  templateUrl: './corporate-entities.component.html',
  styleUrls: ['./corporate-entities.component.scss']
})
export class CorporateEntitiesComponent implements OnInit, OnDestroy {

  @ViewChild(CdkPortal, {static: true}) portalContent: CdkPortal;

  rawCorporateEntities: Array<EntityCardModel> = [];
  corporateEntities: Array<EntityCardModel> = [];
  corporateEntitiesSearchResults: Array<EntityCardModel>;

  totalItems: number;
  itemsPerPage = 5;
  pageSizeOptions = [2, 5, 7, 10];

  currentPageIndex = 0;
  currentPageLength = 0;

  constructor(private readonly toolbarPortalService: ToolbarPortalService,
              private readonly entitiesQueries: EntitiesQueries) {
    // TODO: Implement service call to get page data
    this.entitiesQueries.getCorporate()
      .subscribe((entities: Array<EntityModel>) => {
        this.rawCorporateEntities = EntityCardTransformer.fromEntityModels(entities);
        this.corporateEntities = this.rawCorporateEntities
          .slice(0, this.itemsPerPage);
        this.totalItems = this.rawCorporateEntities.length;
        console.log(this.rawCorporateEntities);
      });
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
    this.corporateEntities =
      this.corporateEntitiesSearchResults?.slice(event.pageIndex * event.pageSize, (event.pageIndex * event.pageSize) + event.pageSize)
      ?? this.rawCorporateEntities.slice(event.pageIndex * event.pageSize, (event.pageIndex * event.pageSize) + event.pageSize);
  }

  onSearch(term: string): void {
    if (term && term.length > 0) {
      this.corporateEntitiesSearchResults = EntitySearchUtil.fuzzySearch(this.rawCorporateEntities, term);
    } else {
      this.corporateEntitiesSearchResults = undefined;
    }
    this.onPageChange({pageIndex: this.currentPageIndex, pageSize: this.itemsPerPage, length: this.currentPageLength});
    this.totalItems = this.corporateEntitiesSearchResults?.length ?? this.rawCorporateEntities.length;
  }

  onButtonClick(text: string): void {
    console.log({buttonClick: text});
  }

}
