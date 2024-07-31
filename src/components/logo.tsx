import { forwardRef, AnchorHTMLAttributes } from "react";
import Link from "next/link";

import LogoIcon from "@/assets/images/svgs/logo.svg";

export interface LogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: number | string;
}

const Logo = forwardRef<HTMLAnchorElement, LogoProps>(
  ({ size = 72, ...props }, ref) => {
    return (
      <Link ref={ref} href="/" {...props}>
        <LogoIcon width={size} height={size} aria-hidden />
        <span className="sr-only">Messaging App logo</span>
      </Link>
    );
  },
);
Logo.displayName = "Logo";

export { Logo };
