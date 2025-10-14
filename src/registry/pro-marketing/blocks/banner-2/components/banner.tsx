"use client";

import { Sparkles, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { FeaturedIcon } from "@/registry/pro-marketing/ui/featured-icon";

export function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    // To make the banner fixed, add classes like `fixed top-0 inset-x-0 z-50` to the container element
    <div className="bg-background w-full">
      <div className="relative flex flex-col items-start gap-4 md:flex-row md:items-center">
        <FeaturedIcon variant="square">
          <Sparkles />
        </FeaturedIcon>

        <div className="flex w-full flex-1 flex-col items-start justify-between gap-5 md:flex-row md:items-center lg:gap-9">
          <p className="text-foreground flex-1 font-sans text-base leading-6 font-normal text-pretty">
            <span className="font-semibold">New from Acme Inc: </span> AI Productivity Suite
          </p>

          <div className="flex w-full shrink-0 flex-col gap-4 md:w-auto md:flex-row md:items-center">
            <Button variant="secondary">Explore The Update</Button>
            <Button>Try It Now</Button>
          </div>
        </div>

        <div className="absolute top-0 right-0 md:static">
          <Button size="icon-sm" variant="ghost" onClick={() => setIsVisible(false)}>
            <X />
          </Button>
        </div>
      </div>
    </div>
  );
}
