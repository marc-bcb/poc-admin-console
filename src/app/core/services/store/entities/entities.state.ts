import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {FetchAllEntities, FetchCorporateEntities, FetchIndividualEntities, GetStateAllEntities, SetEntities} from './entities.actions';
import {CorporateEntitiesService} from '../../pages/entities/corporate/corporate-entities.service';
import {first} from 'rxjs/operators';
import {EntityResponseModel} from '../../pages/entities/models/entity-response.model';
import {IndividualEntitiesService} from '../../pages/entities/individual/individual-entities.service';
import {EntitiesService} from '../../pages/entities/entities.service';
import {EntityModel} from '../../../models/entity/entity.model';

const initialState: EntitiesStateModel = {
  corporate: [],
  individual: [],
  onboarding: [],
  error: undefined
};

@State<EntitiesStateModel>({
  name: 'entities',
  defaults: {...initialState}
})

@Injectable()
export class EntitiesState {

  constructor(
    private readonly entitiesService: EntitiesService,
    private readonly corporateEntitiesService: CorporateEntitiesService,
    private readonly individualEntitiesService: IndividualEntitiesService) {
  }

  // -------------------------- Actions --------------------------

  @Action(FetchAllEntities)
  fetchAllEntities(ctx: StateContext<EntitiesStateModel>, {payload}: FetchAllEntities): void {
    this.entitiesService.getEntities(payload)
      .pipe(
        first(data => !!data)
      )
      .subscribe(
        (res: EntityResponseModel) => {
          ctx.dispatch(new SetEntities({
            corporate: res.entities.filter((entity: EntityModel) => entity.type === 'corporate'),
            individual: res.entities.filter((entity: EntityModel) => entity.type === 'individual'),
            onboarding: res.entities.filter((entity: EntityModel) => entity.status === 'onboarding'),
            error: undefined
          }));
        },
        (error: Error) =>
          ctx.patchState({error})
      );
  }

  @Action(SetEntities)
  SetEntities({patchState}: StateContext<EntitiesStateModel>, {payload}: SetEntities): void {
    patchState(payload);
  }

  @Action(FetchCorporateEntities)
  fetchCorporateEntities({patchState}: StateContext<EntitiesStateModel>, {payload}: FetchCorporateEntities): void {
    this.corporateEntitiesService.getCorporateEntities(payload)
      .pipe(
        first(data => !!data)
      )
      .subscribe((res: EntityResponseModel) => {
        patchState({corporate: res.entities});
      });
  }

  @Action(FetchIndividualEntities)
  fetchIndividualEntities({patchState}: StateContext<EntitiesStateModel>, {payload}: FetchIndividualEntities): void {
    this.individualEntitiesService.getIndividualEntities(payload)
      .pipe(
        first(data => !!data)
      )
      .subscribe((res: EntityResponseModel) => {
        patchState({individual: res.entities});
      });
  }

  // -------------------------- Selectors --------------------------
  @Selector()
  getState(state: EntitiesStateModel): EntitiesStateModel {
    return state;
  }

  // @Selector([EntitiesState])
  // public static getAllEntities(state: EntitiesStateModel): EntitiesStateModel {
  //   return {
  //     corporate: state.corporate,
  //     individual: state.individual,
  //     onboarding: state.onboarding
  //   };
  // }
  //
  // @Selector([EntitiesState])
  // public static getCorporateEntities(state: EntitiesStateModel): Array<EntityModel> {
  //   return state.corporate;
  // }
  //
  // @Selector([EntitiesState])
  // public static getIndividualEntities(state: EntitiesStateModel): Array<EntityModel> {
  //   return state.individual;
  // }
  //
  // @Selector([EntitiesState])
  // public static getOnboardingEntities(state: EntitiesStateModel): Array<EntityModel> {
  //   return state.onboarding;
  // }
  //
  // @Selector([EntitiesState])
  // public static getEntitiesError(state: EntitiesStateModel): Error {
  //   return state.error;
  // }
}

export interface EntitiesStateModel {
  corporate?: Array<EntityModel>;
  individual?: Array<EntityModel>;
  onboarding?: Array<EntityModel>;
  error?: Error;
}
