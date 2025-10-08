import * as React from "react";

import { cn } from "@/lib/utils";

export function SubFeature({
  title,
  description,
  icon,
  leftBorder = false,
  className,
  ...props
}: Omit<React.ComponentProps<"div">, "children"> & {
  title: string;
  description: string;
  icon?: React.ReactElement;
  leftBorder?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex max-w-xl flex-col gap-3",
        leftBorder && "border-border border-l pl-9",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        {icon && <div className="[&_svg:not([class*='size-'])]:size-5">{icon}</div>}
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
