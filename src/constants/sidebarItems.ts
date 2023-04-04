export interface NavItem {
  id: string;
  title: string;
  parentTitle: string;
  groupName: string;
  link: string;
  isActive: boolean;
  icon: string;
  subItems: NavItem[];
};

export const navItems: {
  mainTitle: string;
  items: NavItem[];
}[] = [
  {
    mainTitle: "MENU",
    items: [
      {
        id: "menu-1",
        parentTitle: "MENU",
        title: "Dashboard",
        groupName: 'MENU',
        link: "/",
        isActive: true,
        icon: "DashboardIcon",
        subItems: [],
      }
    ]
  },
  {
    mainTitle: "PAGES",
    items: [
      {
        id: "pages-1",
        title: "Authentication",
        parentTitle: "PAGES",
        groupName: 'PAGES',
        link: "#",
        isActive: false,
        icon: "AuthIcon",
        subItems: [
          {
            id: "pages-1-auth-1",
            title: "Sign In",
            parentTitle: "Authentication",
            groupName: 'PAGES',
            link: "#",
            isActive: false,
            icon: "-",
            subItems: [
              {
                id: "pages-1-auth-1-basic",
                title: "Basic",
                parentTitle: "Sign In",
                groupName: 'PAGES',
                link: "#",
                isActive: false,
                icon: "-",
                subItems: [
                  {
                    id: "pages-1-auth-1-basic-1",
                    title: "Basic-1",
                    parentTitle: "Basic",
                    groupName: 'PAGES',
                    link: "auth/basic1",
                    isActive: false,
                    icon: "-",
                    subItems: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "pages-2",
        title: "Pages",
        parentTitle: "PAGES",
        groupName: 'PAGES',
        link: "/pages",
        isActive: false,
        icon: "PagesIcon",
        subItems: []
      }
    ]
  }
];