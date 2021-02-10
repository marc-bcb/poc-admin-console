import {SideNavModel} from './core/components/sidenav/models/side-nav.model';

export enum APP_ROUTES {
  DASHBOARD = 'dashboard',
  ONBOARDING = 'entities/onboarding',
  CORPORATE_ENTITIES = 'entities/corporate-entities',
  INDIVIDUAL_ENTITIES = 'entities/individual-entities',
  PARTNERS = 'partners',
  SYSTEM_USERS = 'system/users'
}

export const SIDE_NAV_MODEL: SideNavModel = {
  navItemsGroups: [{
    title: undefined,
    navItems: [{
      title: 'Dashboard',
      location: `/${APP_ROUTES.DASHBOARD}`,
      icon: 'show_chart'
    }, {
      title: 'Onboarding',
      location: `/${APP_ROUTES.ONBOARDING}`,
      icon: 'folder'
    }, {
      title: 'Corporate entities',
      location: `/${APP_ROUTES.CORPORATE_ENTITIES}`,
      icon: 'business'
    }, {
      title: 'Individual entities',
      location: `/${APP_ROUTES.INDIVIDUAL_ENTITIES}`,
      icon: 'person'
    }]
  }, {
    title: 'Administration',
    navItems: [{
      title: 'Partners',
      location: `/${APP_ROUTES.PARTNERS}`,
      icon: 'business',
    }, {
      title: 'System',
      icon: 'settings_suggest',
      children: [{
        title: 'System users',
        location: `/${APP_ROUTES.SYSTEM_USERS}`,
        icon: 'group'
      }]
    }]
  }],
  companyLogo: 'assets/logo.png',
  expandIcon: 'double_arrow'
};
