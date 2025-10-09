"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { FeaturedIcon } from "@/registry/pro-marketing/components/featured-icon";

type FeatureStackContextValue = {
  size: "sm" | "md";
  alignment: "left" | "center";
};

const FeatureStackContext = React.createContext<FeatureStackContextValue>({
  alignment: "center",
  size: "md",
});

function useFeatureStackContext(): FeatureStackContextValue {
  const context = React.useContext(FeatureStackContext);
  if (!context) {
    throw new Error("FeatureStack subcomponents must be used within a <FeatureStack> parent.");
  }
  return context;
}

function FeatureStack({
  size = "md",
  alignment = "center",
  className,
  ...props
}: React.ComponentProps<"div"> & { size?: "sm" | "md"; alignment?: "left" | "center" }) {
  return (
    <FeatureStackContext.Provider value={{ size, alignment }}>
      <div
        data-slot="feature-stack"
        data-size={size}
        data-alignment={alignment}
        className={cn(
          "group/feature-stack flex max-w-xl flex-col gap-4",
          alignment === "left" && "items-start justify-start",
          alignment === "center" && "items-center justify-start text-center",
          className
        )}
        {...props}
      />
    </FeatureStackContext.Provider>
  );
}

function FeatureStackIcon({
  className,
  icon,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "featured";
  icon: React.ReactElement;
}) {
  const { size } = useFeatureStackContext();
  return (
    <div
      data-slot="feature-stack-icon"
      data-variant={variant}
      className={cn(
        "[&_svg:not([class*='text-'])]:text-primary shrink-0 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {variant === "featured" && (
        <FeaturedIcon variant="circular" size={size === "md" ? "lg" : "md"}>
          {icon}
        </FeaturedIcon>
      )}

      {variant === "default" && (
        <div
          className={cn(
            size == "sm" && "[&_svg:not([class*='size-'])]:size-6",
            size == "md" && "[&_svg:not([class*='size-'])]:size-7"
          )}
        >
          {icon}
        </div>
      )}
    </div>
  );
}

function FeatureStackHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="feature-stack-header"
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  );
}

function FeatureStackTitle({ className, ...props }: React.ComponentProps<"div">) {
  const { size } = useFeatureStackContext();
  return (
    <div
      data-slot="feature-stack-title"
      className={cn(
        "text-foreground font-sans tracking-[-0.6px]",
        size == "sm" && "text-base leading-6 font-medium",
        size == "md" && "text-xl leading-8 font-semibold",
        className
      )}
      {...props}
    />
  );
}

function FeatureStackBody({ className, ...props }: React.ComponentProps<"div">) {
  const { size } = useFeatureStackContext();
  return (
    <div
      data-slot="feature-stack-body"
      className={cn(
        "text-muted-foreground font-sans font-normal text-pretty",
        size == "sm" && "text-sm leading-5",
        size == "md" && "text-lg leading-8",
        className
      )}
      {...props}
    />
  );
}

function FeatureStackContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="feature-stack-content" className={cn("w-full", className)} {...props} />;
}

function FeatureStackAction({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="feature-stack-action" className={cn("w-full", className)} {...props} />;
}

export {
  FeatureStack,
  FeatureStackAction,
  FeatureStackBody,
  FeatureStackContent,
  FeatureStackHeader,
  FeatureStackIcon,
  FeatureStackTitle,
};
