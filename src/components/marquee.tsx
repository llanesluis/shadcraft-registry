"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import type { MarqueeProps as FastMarqueeProps } from "react-fast-marquee";
import FastMarquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

const marqueeVariants = cva("relative overflow-hidden", {
  variants: {
    fade: {
      none: "",
      horizontal: "mask-x-from-90%",
      left: "mask-l-from-90%",
      right: "mask-r-from-90%",
      vertical: "mask-y-from-90%",
      top: "mask-t-from-90%",
      bottom: "mask-b-from-90%",
    },
  },
  defaultVariants: {
    fade: "horizontal",
  },
});

function Marquee({
  className,
  fade,
  direction = "left",
  autoFill = true,
  pauseOnHover = false,
  ...props
}: FastMarqueeProps & VariantProps<typeof marqueeVariants>) {
  return (
    <FastMarquee
      data-slot="marquee"
      className={cn(marqueeVariants({ fade }), className)}
      autoFill={autoFill}
      pauseOnHover={pauseOnHover}
      {...props}
    />
  );
}

function MarqueeItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="marquee-item"
      className={cn("mx-5 shrink-0 object-contain", className)}
      {...props}
    />
  );
}

export { Marquee, MarqueeItem };
