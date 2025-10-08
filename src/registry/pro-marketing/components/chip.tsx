import * as React from "react";

import { cn } from "@/lib/utils";

export function Chip({
  icon,
  label,
  className,
  ...props
}: Omit<React.ComponentProps<"div">, "children"> & { icon: React.ReactElement; label: string }) {
  return (
    <div className={cn("flex items-center gap-1", className)} {...props}>
      {icon && (
        <div
          aria-hidden="true"
          className="text-muted-foreground [&_svg:not([class*='size-'])]:size-4"
        >
          {icon}
        </div>
      )}
      <span className="text-foreground text-sm font-medium">{label}</span>
    </div>
  );
}
