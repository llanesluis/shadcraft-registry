"use client";

import { X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    // To make the banner fixed, add classes like `fixed top-0 inset-x-0 z-50` to the container element
    <div className="bg-background w-full">
      <div className="flex flex-row items-start justify-between gap-5 lg:items-center lg:gap-9">
        <p className="text-foreground flex-1 font-sans text-base leading-6 font-normal text-pretty">
          <span className="font-semibold">New from Acme Inc: </span> AI Productivity Suite.{" "}
          <a href="#" className="underline">
            Check it out
          </a>
        </p>

        <div className="shrink-0">
          <Button size="icon-sm" variant="ghost" onClick={() => setIsVisible(false)}>
            <X />
          </Button>
        </div>
      </div>
    </div>
  );
}
