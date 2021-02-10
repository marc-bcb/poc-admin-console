import {NavItemParentModel} from './nav-item-parent.model';

export interface SideNavModel {
  companyLogo?: string;
  expandIcon?: string;
  navItemsGroups: Array<{
    title: string;
    navItems: Array<NavItemParentModel>;
  }>;
}
