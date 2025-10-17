"use client";

import { Info, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { FeaturedIcon } from "@/registry/pro-marketing/ui/featured-icon";

export function Banner5() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    // To make the banner fixed, add classes like `fixed top-0 inset-x-0 z-50` to the container element
    <aside className="bg-background border-border w-full rounded-xl border p-4 shadow-md">
      <div className="relative flex flex-col items-start gap-4 md:flex-row md:items-center">
        <FeaturedIcon variant="square">
          <Info />
        </FeaturedIcon>

        <div className="flex w-full flex-1 flex-col items-start justify-between gap-5 md:flex-row md:items-center lg:gap-9">
          <p className="text-muted-foreground flex-1 font-sans text-base leading-6 font-normal text-pretty">
            Acme Inc. uses cookies to improve your experience. By using our site, you agree to our
            cookie policy.
          </p>

          <div className="flex w-full shrink-0 flex-col-reverse gap-x-4 gap-y-3 md:w-auto md:flex-row md:items-center">
            <Button variant="ghost">Preferences</Button>
            <Button variant="secondary">Decline</Button>
            <Button>Accept All</Button>
          </div>
        </div>

        <div className="absolute top-0 right-0 md:static">
          <Button size="icon-sm" variant="ghost" onClick={() => setIsVisible(false)}>
            <X />
          </Button>
        </div>
      </div>
    </aside>
  );
}
