import { IconProps } from "./models/IconProps";

export default function IconFacebook({
  size = 24,
  color = "#4460A0",
}: IconProps) {
  return (
    <svg
      viewBox="20 10 72 72"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
    >
      <title>Facebook</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Social-Icons---Circle"
          transform="translate(-152.000000, -43.000000)"
        >
          <g id="Facebook" transform="translate(152.000000, 43.000000)">
            <path
              d="M60.4641463,13.4173171 L60.4641463,22.7278049 L54.9382927,22.7421951 C50.6068293,22.7421951 49.7721951,24.8 49.7721951,27.807561 L49.7721951,34.4702439 L60.09,34.4702439 L58.7517073,44.8887805 L49.7721951,44.8887805 L49.7721951,72 L39.0097317,72 L39.0097317,44.8887805 L30,44.8887805 L30,34.4702439 L39.0097317,34.4702439 L39.0097317,26.7858537 C39.0097317,17.8639024 44.4478049,13 52.42,13 C56.2204634,13 59.5,13.2878049 60.4641463,13.4173171 Z"
              fill="#FFFFFF"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
