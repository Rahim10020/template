import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function RemoveIcon(props: IconProps) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      {...props}
    >
      <path
        d="M25 54.1666C23.8195 54.1666 22.8299 53.7673 22.0313 52.9687C21.2326 52.1701 20.8333 51.1805 20.8333 50C20.8333 48.8194 21.2326 47.8298 22.0313 47.0312C22.8299 46.2326 23.8195 45.8333 25 45.8333H75C76.1806 45.8333 77.1701 46.2326 77.9688 47.0312C78.7674 47.8298 79.1667 48.8194 79.1667 50C79.1667 51.1805 78.7674 52.1701 77.9688 52.9687C77.1701 53.7673 76.1806 54.1666 75 54.1666H25Z"
        fill="currentColor" />
    </svg>
  );
}
