import {EntityModel} from '../../../models/entity/entity.model';
import {EntityCardModel} from '../models/entity-card.model';

export class EntityCardTransformer {
  public static fromEntityModel(entityModel: EntityModel): EntityCardModel {
    return {
      profileId: entityModel.profile.id,
      cNumber: '',
      name: entityModel.entity_name,
      flags: [
        {type: '', status: 'success', value: ''}
      ],
      details: undefined
    };
  }

  public static fromEntityModels(entityModels: Array<EntityModel>): Array<EntityCardModel> {
    return entityModels.map((entity: EntityModel) => {
      return EntityCardTransformer.fromEntityModel(entity);
    });
  }
}
