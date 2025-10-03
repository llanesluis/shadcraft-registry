import * as React from "react";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export function SubFeature({
  title,
  description,
  icon: Icon,
  leftBorder = false,
  className,
  ...props
}: Omit<React.ComponentProps<"div">, "children"> & {
  title: string;
  description: string;
  icon?: LucideIcon;
  leftBorder?: boolean;
}) {
  return (
    <div
      className={cn("flex flex-col gap-3", leftBorder && "border-border border-l pl-9", className)}
      {...props}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon className="size-5" />}
        <h3 className="text-foreground font-sans text-xl leading-8 font-medium tracking-[-0.6px]">
          {title}
        </h3>
      </div>
      <p className="text-muted-foreground font-sans text-base leading-6 font-normal">
        {description}
      </p>
    </div>
  );
}
