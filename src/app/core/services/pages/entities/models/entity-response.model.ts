import {EntityModel} from '../../../../models/entity/entity.model';

export interface EntityResponseModel {
  entities: Array<EntityModel>;
  count: number;
}
