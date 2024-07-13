"use client";

import { forwardRef } from "react";
import { signOut } from "next-auth/react";

import { Button, type ButtonProps } from "@/components/ui/button";

const LogOutButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <Button ref={ref} onClick={async () => await signOut()} {...props}>
        Log out
      </Button>
    );
  },
);
LogOutButton.displayName = "LogOutButton";

export { LogOutButton };
