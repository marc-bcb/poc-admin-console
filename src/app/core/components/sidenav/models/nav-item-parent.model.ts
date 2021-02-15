import {NavItemModel} from './nav-item.model';

export interface NavItemParentModel extends NavItemModel {
  linkId?: string;
  children?: Array<NavItemModel>;
}
