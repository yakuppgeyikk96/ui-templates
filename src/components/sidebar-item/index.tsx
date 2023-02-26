import { NavItem, navItems } from "../../constants/sidebarItems";
import DashboardIcon from "../../icons/DashboardIcon";
import AuthIcon from "../../icons/AuthIcon";
import PagesIcon from "../../icons/PagesIcon";
import ArrowDropUpIcon from "../../icons/ArrowDropUpIcon";
import ArrowDropDownIcon from "../../icons/ArrowDropDownIcon";
import SubItem from "./sub-item";

const icons = {
  DashboardIcon,
  AuthIcon,
  PagesIcon,
};

export default function SidebarItem({
  item,
  itemClicked,
}: {
  item: NavItem;
  itemClicked: (item: NavItem) => void;
}) {
  const Icon = icons[item.icon];

  const handleItemClicked = () => {
    itemClicked(item);
  };

  return (
    <>
      <div
        className={`${
          item.isActive ? "text-white" : "text-iconPassive"
        } hover:text-white transition-colors duration-300 flex items-center my-4 text-sm cursor-pointer`}
        onClick={handleItemClicked}
      >
        <div className="w-16 flex justify-center">
          <Icon color="currentColor" size="20" />
        </div>
        <div className="w-40 overflow-hidden">
          <p className="text-md">{item.title}</p>
        </div>
        {item.subItems.length > 0 && (
          <div>
            {item.isActive ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </div>
        )}
      </div>
      {item.isActive && (
        <div>
          {item.subItems.map((subItem) => {
            return <SubItem item={subItem} />;
          })}
        </div>
      )}
    </>
  );
}
