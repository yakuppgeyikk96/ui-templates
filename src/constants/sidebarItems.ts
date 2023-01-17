export interface NavItem {
  id: string;
  title: string;
  parentTitle: string;
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
        link: "#",
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
        link: "#",
        isActive: false,
        icon: "AuthIcon",
        subItems: [
          {
            id: "pages-1-auth-1",
            title: "Sign In",
            parentTitle: "Authentication",
            link: "#",
            isActive: false,
            icon: "-",
            subItems: []
          }
        ]
      },
      {
        id: "pages-2",
        title: "Pages",
        parentTitle: "PAGES",
        link: "#",
        isActive: false,
        icon: "PagesIcon",
        subItems: []
      }
    ]
  }
];