import {NavItemModel} from './nav-item.model';

export interface NavItemParentModel extends NavItemModel {
  children?: Array<NavItemModel>;
}
