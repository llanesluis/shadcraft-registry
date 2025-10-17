"use client";

import { X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function Banner7() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    // To make the banner fixed, add classes like `fixed top-0 inset-x-0 z-50` to the container element
    <aside className="bg-background border-border w-full rounded-xl border p-4 shadow-md">
      <div className="flex flex-row items-center justify-between gap-5 lg:gap-9">
        <div className="flex-1">
          <p className="text-foreground mx-auto w-fit font-sans text-base leading-6 font-normal text-pretty">
            <span className="font-semibold">New from Acme Inc: </span> AI Productivity Suite.{" "}
            <a href="#" className="underline">
              Check it out
            </a>
          </p>
        </div>

        <div className="shrink-0">
          <Button size="icon-sm" variant="ghost" onClick={() => setIsVisible(false)}>
            <X />
          </Button>
        </div>
      </div>
    </aside>
  );
}
