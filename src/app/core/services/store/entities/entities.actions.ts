import {EntitiesRequestModel} from '../../pages/entities/models/entities-request.model';
import {EntityTypes} from '../../../models/entity/entity-types.enum';
import {EntitiesStateModel} from './entities.state';

export class LoadEntities {
  static readonly type = '[entities] load entities';

  constructor() {
  }
}

export class FetchAllEntities {
  static readonly type = '[entities] fetch all entities';

  constructor(public payload: EntitiesRequestModel) {
  }
}

export class SetEntities {
  static readonly type = '[entities] set entities';

  constructor(public payload: EntitiesStateModel) {
  }
}

export class GetStateAllEntities {
  static readonly type = '[entities] state get all entities';

  constructor() {
  }
}

export class FetchCorporateEntities {
  static readonly type = '[entities] fetch corporate entities';

  constructor(public payload: EntitiesRequestModel) {
  }
}

export class FetchIndividualEntities {
  static readonly type = '[entities] fetch individual entities';

  constructor(public payload: EntitiesRequestModel) {
  }
}

export class GetAllEntities {
  static readonly type = '[entities] get all entities';

  constructor() {
  }
}

export class GetEntitiesByType {
  static readonly type = '[entities] get entities by type';

  constructor(public type: EntityTypes) {
  }
}
