import { NavItem } from "../../constants/sidebarItems";
import DashboardIcon from "../../icons/DashboardIcon";
import AuthIcon from "../../icons/AuthIcon";
import PagesIcon from "../../icons/PagesIcon";
import ArrowDropUpIcon from "../../icons/ArrowDropUpIcon";
import ArrowDropDownIcon from "../../icons/ArrowDropDownIcon";

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
  const {isActive, icon, title, subItems} = item;
  const Icon = icons[icon];

  const handleItemClicked = (item: NavItem) => {
    itemClicked(item);
  };

  return (
    <>
      <div
        className={`${
          isActive && subItems.length === 0 ? "text-white" : "text-iconPassive"
        } ${
          icon !== '-' ? 'mt-4' : 'mt-2'
        }
        font-semibold hover:text-white transition-colors duration-300 flex items-center text-sm cursor-pointer`}
        onClick={() => handleItemClicked(item)}
      >
        {icon !== '-' && (
          <div className="w-12 flex justify-center">
            <Icon color="currentColor" size="20" />
          </div>
        )}
        <div className="w-40 overflow-hidden flex-1">
          <p className="text-md">{subItems.length === 0 && icon === '-' ? `- ${title}` : title}</p>
        </div>
        {subItems.length > 0 && (
          <div>
            {isActive ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </div>
        )}
      </div>
      {
        subItems.map((subItem) => (
          <div key={subItem.id}  
            className={`
                ${item.isActive ? '' : 'h-0 overflow-hidden'}
                ${item.icon !== '-' ? 'pl-12' : ''}
                ${item.icon === '-' && item.subItems.length > 0 ? 'pl-2' : ''}
              `}>
            <SidebarItem 
              item={subItem} 
              itemClicked={handleItemClicked} 
            />
          </div>
        ))
      }
    </>
  );
}
