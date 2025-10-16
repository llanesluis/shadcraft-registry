import * as React from "react";

import { cn } from "@/lib/utils";

export function LocationDot({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      className={cn("text-primary", className)}
      {...props}
    >
      <circle opacity="0.1" cx="19" cy="19" r="12" fill="currentColor" />
      <circle opacity="0.1" cx="19" cy="19" r="19" fill="currentColor" />
      <circle cx="19" cy="19" r="4" fill="currentColor" />
    </svg>
  );
}
