import { LucideIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

export type FeatureChipProps = {
  label: string;
  icon: LucideIcon;
} & Omit<React.ComponentProps<"div">, "children">;

export function FeatureChip({ icon: Icon, label, className, ...props }: FeatureChipProps) {
  return (
    <div className={cn("flex items-center gap-1", className)} {...props}>
      <Icon aria-hidden="true" className="text-muted-foreground size-4" />
      <span className="text-foreground text-sm font-medium">{label}</span>
    </div>
  );
}
