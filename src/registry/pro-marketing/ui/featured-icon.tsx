import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
const featuredIconVariants = cva(
  "bg-muted border flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='text-'])]:text-primary",
  {
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
        class: "rounded-xl",
      },
    ],
    defaultVariants: {
      variant: "circular",
      size: "md",
    },
  }
);

export function FeaturedIcon({
  size,
  variant,
  className,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof featuredIconVariants>) {
  return (
    <div
      data-slot="featured-icon"
      className={cn(featuredIconVariants({ variant, size }), className)}
      {...props}
    />
  );
}
