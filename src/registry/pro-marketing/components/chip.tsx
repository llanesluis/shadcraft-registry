import { LucideIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

export type ChipProps = {
  label: string;
  icon: LucideIcon;
} & Omit<React.ComponentProps<"div">, "children">;

export function Chip({ icon: Icon, label, className, ...props }: ChipProps) {
  return (
    <div className={cn("flex items-center gap-1", className)} {...props}>
      <Icon aria-hidden="true" className="text-muted-foreground size-4" />
      <span className="text-foreground text-sm font-medium">{label}</span>
    </div>
  );
}
