import type { SVGProps } from "react";

export function ChainPayLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="currentColor"
        d="M168 40.7a88.2 88.2 0 0 0-80 0 8 8 0 0 0-6.1 9.1l11.4 34.3a8 8 0 0 0 9 6.2h51.4a8 8 0 0 0 9-6.2l11.4-34.3a8 8 0 0 0-6.1-9.1ZM88 215.3a88.2 88.2 0 0 0 80 0 8 8 0 0 0 6.1-9.1l-11.4-34.3a8 8 0 0 0-9-6.2H102.3a8 8 0 0 0-9 6.2l-11.4 34.3a8 8 0 0 0 6.1 9.1Z"
        opacity={0.6}
      />
      <path
        fill="currentColor"
        d="M40.7 88a88.2 88.2 0 0 0 0 80 8 8 0 0 0 9.1 6.1l34.3-11.4a8 8 0 0 0 6.2-9V102.3a8 8 0 0 0-6.2-9L49.8 81.9a8 8 0 0 0-9.1 6.1ZM215.3 168a88.2 88.2 0 0 0 0-80 8 8 0 0 0-9.1-6.1l-34.3 11.4a8 8 0 0 0-6.2 9v51.4a8 8 0 0 0 6.2 9l34.3 11.4a8 8 0 0 0 9.1-6.1Z"
      />
    </svg>
  );
}
