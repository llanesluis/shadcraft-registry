import { cva, VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const featuredIconVariants = cva("bg-muted border  flex items-center justify-center", {
  variants: {
    variant: {
      circular: "rounded-full",
      square: "",
    },
    size: {
      sm: "size-7 [&_svg:not([class*='size-'])]:size-3",
      md: "size-11 [&_svg:not([class*='size-'])]:size-4",
      lg: "size-16 [&_svg:not([class*='size-'])]:size-5",
    },
  },
  compoundVariants: [
    {
      size: "sm",
      variant: "square",
      class: "rounded-lg",
    },
    {
      size: "md",
      variant: "square",
      class: "rounded-xl",
    },
    {
      size: "lg",
      variant: "square",
      class: "rounded-2xl",
    },
  ],
  defaultVariants: {
    variant: "circular",
    size: "md",
  },
});

export function FeaturedIcon({
  icon: Icon,
  size,
  variant,
  className,
  containerClassName,
  ...props
}: React.ComponentProps<LucideIcon> &
  VariantProps<typeof featuredIconVariants> & { icon: LucideIcon; containerClassName?: string }) {
  return (
    <div
      data-slot="featured-icon-container"
      className={cn(featuredIconVariants({ variant, size }), containerClassName)}
    >
      <Icon
        data-slot="featured-icon-icon"
        aria-hidden="true"
        className={cn("text-primary", className)}
        {...props}
      />
    </div>
  );
}
