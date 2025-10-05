import { cva, VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const featuredIconVariants = cva(
  "bg-muted border [&_svg:not([class*='text-'])]:text-primary flex items-center justify-center",
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
        class: "rounded-2xl",
      },
    ],
    defaultVariants: {
      variant: "circular",
      size: "md",
    },
  }
);

export interface FeaturedIconProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof featuredIconVariants> {
  children: React.ReactElement<React.ComponentProps<LucideIcon>>;
}

export function FeaturedIcon({ size, variant, className, children, ...props }: FeaturedIconProps) {
  return (
    <div
      data-slot="featured-icon"
      className={cn(featuredIconVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </div>
  );
}
