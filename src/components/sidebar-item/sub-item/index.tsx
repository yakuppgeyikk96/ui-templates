import { NavItem } from "../../../constants/sidebarItems";
import ArrowDropDownIcon from "../../../icons/ArrowDropDownIcon";
import ArrowDropUpIcon from "../../../icons/ArrowDropUpIcon";

export default function SubItem({ item }: { item: NavItem }) {
  return (
    <>
      <div className="ml-14 text-sm text-iconPassive flex justify-between items-center cursor-pointer">
        <div>{item.title}</div>
        {item.subItems.length > 0 && (
          <div>
            {item.isActive ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </div>
        )}
      </div>
      {
        item.subItems.map((item) => (
          <div className="ml-2">
            <SubItem item={item} />
          </div>
        ))
      }
    </>
  );
}
