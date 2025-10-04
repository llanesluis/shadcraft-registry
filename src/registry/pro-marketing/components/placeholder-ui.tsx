import * as React from "react";

import { cn } from "@/lib/utils";

function PlaceholderUI({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-muted aspect-auto size-fit overflow-hidden rounded-[12px] border shadow-xl md:rounded-[27px]",
        "[&_img:not([class*='aspect-'])]:aspect-auto [&_img:not([class*='object-'])]:object-cover [&_img:not([class*='size-'])]:size-full",
        className
      )}
      {...props}
    />
  );
}

function PlaceholderUIInset({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-background m-1 aspect-auto size-fit overflow-hidden rounded-[9px] border-2 shadow-xl md:rounded-[25px]",
        className
      )}
      {...props}
    />
  );
}

export { PlaceholderUI, PlaceholderUIInset };
