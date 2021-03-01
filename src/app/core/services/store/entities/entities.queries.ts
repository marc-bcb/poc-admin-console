import {StateToken, Store} from '@ngxs/store';
import {EntitiesStateModel} from './entities.state';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EntityModel} from '../../../models/entity/entity.model';
import {map} from 'rxjs/operators';

@Injectable()
export class EntitiesQueries {

  constructor(private readonly store: Store) {
  }

  getState(): Observable<EntitiesStateModel> {
    return this.store.select(new StateToken<EntitiesStateModel>('entities'));
  }

  getCorporate(): Observable<Array<EntityModel>> {
    return this.store.select(new StateToken<EntitiesStateModel>('entities'))
      .pipe(
        map(res => res.corporate)
      );
  }

  getIndividual(): Observable<Array<EntityModel>> {
    return this.store.select(new StateToken<EntitiesStateModel>('entities'))
      .pipe(
        map(res => res.individual)
      );
  }

  getOnboarding(): Observable<Array<EntityModel>> {
    return this.store.select(new StateToken<EntitiesStateModel>('entities'))
      .pipe(
        map(res => res.onboarding)
      );
  }

  getError(): Observable<Error> {
    return this.store.select(new StateToken<EntitiesStateModel>('entities'))
      .pipe(
        map(res => res.error)
      );
  }
}
