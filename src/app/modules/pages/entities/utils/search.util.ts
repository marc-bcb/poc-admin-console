import {EntityCardModel} from '../../../../core/components/entity-card/models/entity-card.model';

export class EntitySearchUtil {
  public static fuzzySearch(rawList: Array<EntityCardModel>, term: string): Array<EntityCardModel> {
    const _term: string = String(term).toLowerCase();

    return rawList.filter((entity: EntityCardModel) => {
      return entity.cNumber?.toLowerCase().includes(_term)
        || entity.name?.toLowerCase().includes(_term)
        || entity.profileId?.toLowerCase().includes(_term)
        || entity.details?.some((entityDetail: { type: string, value: any }) => entityDetail.value.toLowerCase().includes(_term))
        || entity.flags?.some((entityDetail: { type: string, value: any }) => entityDetail.value.toLowerCase().includes(_term));
    });
  }
}
