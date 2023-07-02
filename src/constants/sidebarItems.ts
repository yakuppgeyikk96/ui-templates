export interface NavItem {
  id: string;
  title: string;
  parentTitle: string;
  groupName: string;
  link: string;
  isActive: boolean;
  icon: string;
  subItems: NavItem[];
}

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
        groupName: "MENU",
        link: "/",
        isActive: true,
        icon: "DashboardIcon",
        subItems: [],
      },
    ],
  },
  {
    mainTitle: "PAGES",
    items: [
      {
        id: "pages-1",
        title: "Authentication",
        parentTitle: "PAGES",
        groupName: "PAGES",
        link: "#",
        isActive: false,
        icon: "AuthIcon",
        subItems: [
          {
            id: "pages-1-auth-1",
            title: "Sign In",
            parentTitle: "Authentication",
            groupName: "PAGES",
            link: "#",
            isActive: false,
            icon: "-",
            subItems: [
              {
                id: "pages-1-auth-1-demo-1",
                title: "Demo1",
                parentTitle: "Sign In",
                groupName: "PAGES",
                link: "auth/demo1",
                isActive: false,
                icon: "-",
                subItems: [],
              },
              {
                id: "pages-1-auth-1-demo-2",
                title: "Demo2",
                parentTitle: "Sign In",
                groupName: "PAGES",
                link: "auth/demo2",
                isActive: false,
                icon: "-",
                subItems: [],
              },
            ],
          },
        ],
      },
      {
        id: "pages-2",
        title: "Pages",
        parentTitle: "PAGES",
        groupName: "PAGES",
        link: "/pages",
        isActive: false,
        icon: "PagesIcon",
        subItems: [],
      },
    ],
  },
];
