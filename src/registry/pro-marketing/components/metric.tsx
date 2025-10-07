import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Metric({
  className,
  size = "default",
  alignment = "left",
  ...props
}: React.ComponentProps<"div"> & {
  size?: "default" | "lg";
  alignment?: "left" | "center" | "right";
}) {
  return (
    <div
      data-slot="metric"
      data-size={size}
      className={cn(
        "group/metric flex max-w-xl flex-col font-sans",
        alignment === "left" && "border-border items-start border-l pl-6",
        alignment === "center" && "items-center gap-y-1.5 text-center",
        alignment === "right" && "border-border items-end border-r pr-6",
        className
      )}
      {...props}
    />
  );
}

function MetricLabel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="metric-label"
      className={cn(
        "text-foreground text-3xl font-semibold tracking-[-2.5%] group-data-[size=lg]/metric:text-5xl",
        className
      )}
      {...props}
    />
  );
}

function MetricSubLabel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="metric-description"
      className={cn("text-muted-foreground text-base leading-6 font-normal text-pretty", className)}
      {...props}
    />
  );
}

function MetricActionButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="metric-action-button"
      variant="link"
      className={cn("cursor-pointer px-0!", className)}
      {...props}
    />
  );
}

export { Metric, MetricActionButton, MetricLabel, MetricSubLabel };
