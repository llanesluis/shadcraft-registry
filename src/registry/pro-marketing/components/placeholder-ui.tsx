import * as React from "react";

import { cn } from "@/lib/utils";

function PlaceholderUI({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-muted aspect-auto size-fit overflow-hidden rounded-xl border shadow-xl lg:rounded-2xl",
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
        "bg-background m-1 aspect-auto size-fit overflow-hidden rounded-[calc(var(--radius)+2px)] border-2 shadow-xl lg:rounded-[calc(var(--radius-2xl)-2px)]",
        className
      )}
      {...props}
    />
  );
}

export { PlaceholderUI, PlaceholderUIInset };
