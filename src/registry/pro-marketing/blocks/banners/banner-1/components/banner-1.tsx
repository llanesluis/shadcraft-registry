"use client";

import { Mail, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FeaturedIcon } from "@/registry/pro-marketing/ui/featured-icon";

export function Banner1() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    // To make the banner fixed, add classes like `fixed top-0 inset-x-0 z-50` to the container element
    <aside className="bg-background border-border w-full rounded-xl border p-4 shadow-md">
      <div className="relative flex flex-col items-start gap-4 md:flex-row md:items-center">
        <FeaturedIcon variant="square">
          <Mail />
        </FeaturedIcon>

        <div className="flex w-full flex-1 flex-col items-start justify-between gap-5 md:flex-row md:items-center lg:gap-9">
          <div>
            <h3 className="text-foreground font-sans text-base leading-6 font-semibold">
              Stay in the loop
            </h3>
            <p className="text-muted-foreground font-sans text-base leading-6 font-normal text-pretty">
              Get insights, product updates, and productivity tips straight to your inbox.
            </p>
          </div>

          <form className="flex w-full shrink-0 flex-col gap-2 md:w-auto md:flex-row md:items-center">
            <Input placeholder="Enter your email" />
            <Button type="submit" className="cursor-pointer">
              <Mail /> Subscribe
            </Button>
          </form>
        </div>

        <div className="absolute top-0 right-0 md:static">
          <Button
            size="icon-sm"
            variant="ghost"
            className="cursor-pointer"
            onClick={() => setIsVisible(false)}
          >
            <X />
          </Button>
        </div>
      </div>
    </aside>
  );
}
