import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { NavItem, navItems } from "../../constants/sidebarItems";
import SidebarItem from "../sidebar-item";

export default function Sidebar() {
  const [sidebarItems, setSidebarItems] = useState(navItems);
  const [sidebarWidth, setSidebarWidth] = useState('w-0');

  const deactivateOtherItems = (navItems: { mainTitle: string; items: NavItem[] }[], clickedItemId: string) => {
    for (const navItem of navItems) {
      for (const item of navItem.items) {
        if (item.id !== clickedItemId) {
          item.isActive = false;
        }
        if (item.subItems && item.subItems.length > 0) {
          deactivateOtherItems([ { mainTitle: "", items: item.subItems } ], clickedItemId);
        }
      }
    }
  }

  const updateActiveItem = (navItems: { mainTitle: string; items: NavItem[] }[], clickedItemId: string) => {
    for (const navItem of navItems) {
      for (const item of navItem.items) {
        if (item.id === clickedItemId) {
          if (item.subItems.length > 0) {
            item.isActive = !item.isActive;
          }
          else {
            item.isActive = true;
          }

          deactivateOtherItems(navItems, clickedItemId);
          return [];
        } else if (item.subItems && item.subItems.length > 0) {
          updateActiveItem([ { mainTitle: "", items: item.subItems } ], clickedItemId);
        }
      }
    }
  }
  
  const handleItemClicked = (item: NavItem) => {
    updateActiveItem(navItems, item.id);
    setSidebarItems(() => [...navItems]);
  };

  useEffect(() => {
    setSidebarWidth('w-60');
  }, [])
  

  return (
    <aside className={`${sidebarWidth} overflow-hidden transition-all duration-500`}>
      <div className="h-16 w-full flex items-center">
        <div className="w-16 flex justify-center">
          <img src={logo} alt="logo" width={32} />
        </div>
        <div className="w-44 overflow-hidden">
          <p className="text-lg text-white font-semibold">DeerUI</p>
        </div>
      </div>
      <div className="w-full mt-4 px-2">
        {sidebarItems.map((navItem) => {
          return (
            <div className="my-8" key={`${navItem.mainTitle}-1`}>
              <p className="px-4 text-gray-500 font-bold text-sm">
                {navItem.mainTitle}
              </p>
              {navItem.items.map((item) => (
                <SidebarItem
                  key={item.id}
                  item={item}
                  itemClicked={handleItemClicked}
                />
              ))}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
