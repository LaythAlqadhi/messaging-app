"use client";

import { forwardRef } from "react";
import { LoaderCircle } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";

interface SubmitButtonProps extends ButtonProps {
  isLoading: boolean;
}

const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ isLoading, children, ...props }, ref) => {
    return (
      <Button ref={ref} type="submit" {...props} disabled={isLoading}>
        {isLoading && <LoaderCircle className="-ml-8 mr-2 animate-spin" />}
        {children}
      </Button>
    );
  },
);
SubmitButton.displayName = "SubmitButton";

export { SubmitButton };
