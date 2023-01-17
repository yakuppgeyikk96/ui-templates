import { Props } from "./types";

export default function ArrowDropDownIcon({
  size = "24",
  color = "#a4a4a4",
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
        fill={color}
      />
    </svg>
  );
}
