import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
  authority: string;
}

export interface Navigation extends NavigationItem {}

const NavigationItems: Navigation[] = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-align-left',
    authority: 'admin',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
        authority: 'user'
      },
      {
        id: 'ListUser',
        title: 'Technician account',
        type: 'item',
        url: '/test/listTechnician',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
        authority: 'admin'
      },
      {
        id: 'listContrct',
        title: 'Client Folders',
        type: 'item',
        url: '/test/listContract',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
        authority: 'user'
      },
      {
        id: 'listTypeSupport',
        title: 'Type Support',
        type: 'item',
        url: '/test/typesupports',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
        authority: 'admin'
      },
      {
        id: 'CalnderAdmin',
        title: 'Calendar',
        type: 'item',
        url: '/test/clanderVisitepreventive',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
        authority: 'admin'
      },
      {
        id: 'clientListContract',
        title: 'List of customer contracts',
        type: 'item',
        url: '/clientMang/contract-List-Cli',
        classes: 'nav-item',
        icon: 'feather icon-sidebar',
        authority: 'user'
      },
      {
        id: 'menu-level',
        title: 'Menu Levels',
        type: 'collapse',
        icon: 'feather fa-user',
        authority: 'user',
        children: [
          {
            id: 'menu-level-2.1',
            title: 'Menu Level 2.1',
            type: 'item',
            url: 'javascript:',
            external: true,
            authority: 'user'
          },
          {
            id: 'menu-level-2.2',
            title: 'Menu Level 2.2',
            type: 'collapse',
            authority: 'user',
            children: [
              {
                id: 'menu-level-2.2.1',
                title: 'Menu Level 2.2.1',
                type: 'item',
                url: 'javascript:',
                external: true,
                authority: 'user'
              },
              {
                id: 'menu-level-2.2.2',
                title: 'Menu Level 2.2.2',
                type: 'item',
                url: 'javascript:',
                external: true,
                authority: 'user'
              }
            ]
          }
        ]
      }
    ]
  }
];

@Injectable()
export class NavigationItemService {
  get() {
    return NavigationItems;
  }

  getFilteredNavigation(authority: string | null): Navigation[] {
    return this.filterNavigationByAuthority(NavigationItems, authority);
  }

  private filterNavigationByAuthority(items: Navigation[], authority: string | null): Navigation[] {
    return items.filter(item => {
      if (item.authority === authority || !item.authority) {
        return true;
      }
      if (item.children) {
        item.children = this.filterNavigationByAuthority(item.children, authority);
        return item.children.length > 0; // Show parent if it has visible children
      }
      return false;
    });
  }
}
