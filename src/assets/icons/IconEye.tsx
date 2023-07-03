import { IconProps } from "./models/IconProps";

export default function IconEye({ size, className, onClick }: IconProps) {
  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 40.5 27"
    >
      <path
        id="Icon_awesome-eye"
        data-name="Icon awesome-eye"
        d="M40.255,16.973A22.552,22.552,0,0,0,20.25,4.5,22.555,22.555,0,0,0,.245,16.974a2.275,2.275,0,0,0,0,2.052A22.552,22.552,0,0,0,20.25,31.5,22.555,22.555,0,0,0,40.255,19.026,2.275,2.275,0,0,0,40.255,16.973ZM20.25,28.125A10.125,10.125,0,1,1,30.375,18,10.125,10.125,0,0,1,20.25,28.125Zm0-16.875a6.7,6.7,0,0,0-1.78.266,3.364,3.364,0,0,1-4.7,4.7,6.735,6.735,0,1,0,6.484-4.97Z"
        transform="translate(0 -4.5)"
      />
    </svg>
  );
}
