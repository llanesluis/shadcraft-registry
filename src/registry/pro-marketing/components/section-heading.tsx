import * as React from "react";

import { cn } from "@/lib/utils";
import { Heading } from "@/registry/pro-marketing/ui/heading";

function SectionHeading({
  alignment = "left",
  className,
  ...props
}: React.ComponentProps<"div"> & { alignment?: "left" | "center" | "right" }) {
  return (
    <div
      data-slot="section-heading"
      data-alignment={alignment}
      className={cn(
        "group/section-heading flex flex-col gap-3",
        alignment === "left" && "items-start text-left",
        alignment === "center" && "items-center text-center",
        alignment === "right" && "items-end text-right",
        className
      )}
      {...props}
    />
  );
}

function SectionHeadingTitle({
  level = 2,
  size = "2xl",
  className,
  ...props
}: React.ComponentProps<typeof Heading>) {
  return (
    <Heading
      data-slot="section-heading-title"
      level={level}
      size={size}
      className={cn(
        "group-data-[alignment=center]/section-heading:text-center group-data-[alignment=left]/section-heading:text-left group-data-[alignment=right]/section-heading:text-right",
        className
      )}
      {...props}
    />
  );
}

function SectionHeadingContentType({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="section-heading-content-type"
      className={cn("text-foreground font-sans text-base leading-6 font-medium", className)}
      {...props}
    />
  );
}

function SectionHeadingBody({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="section-heading-body"
      className={cn(
        "text-muted-foreground max-w-2xl font-sans text-base leading-6 font-normal text-pretty",
        className
      )}
      {...props}
    />
  );
}

export { SectionHeading, SectionHeadingBody, SectionHeadingContentType, SectionHeadingTitle };
