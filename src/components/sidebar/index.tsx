import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { NavItem, navItems } from "../../constants/sidebarItems";
import SidebarItem from "../sidebar-item";

export default function Sidebar() {
  const [sidebarItems, setSidebarItems] = useState(navItems);

  const handleItemClicked = (item: NavItem) => {
    console.log(item);
    setSidebarItems((prevState) =>
      prevState.map((pState) => {
        if (pState.mainTitle === item.parentTitle) {
          return {
            ...pState,
            items: pState.items.map((i) => {
              if (i.id === item.id) {
                return { ...item, isActive: !item.isActive };
              }
              else {
                return {
                  ...i,
                  isActive: false,
                }
              }
            }),
          };
        } else {
          return {
            ...pState,
            items: pState.items.map((i) => {
              return { ...i, isActive: false };
            }),
          };
        }
      })
    );
  };

  return (
    <aside className="w-56">
      <div className="h-16 w-full flex items-center">
        <div className="w-16 flex justify-center">
          <img src={logo} alt="logo" width={32} />
        </div>
        <div className="w-40 overflow-hidden">
          <p className="text-xl text-white font-semibold">DeerUI</p>
        </div>
      </div>
      <div className="w-full mt-4">
        {sidebarItems.map((navItem) => {
          return (
            <div className="my-8" key={`${navItem.mainTitle}-1`}>
              <p className="px-5 text-gray-500 font-semibold text-xs">
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
