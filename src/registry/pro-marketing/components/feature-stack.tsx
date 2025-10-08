import { cva, type VariantProps } from "class-variance-authority";
import { LucideProps } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { FeaturedIcon } from "@/registry/pro-marketing/components/featured-icon";

const featureStackVariants = cva("group/feature-stack flex flex-col max-w-xl gap-4", {
  variants: {
    variant: {
      default: "",
      card: "bg-card gap-5 lg:gap-9 p-5 lg:p-9 border shadow-sm rounded-2xl",
    },
    alignment: {
      left: "items-start justify-start",
      center: "items-center justify-start text-center",
    },
  },
  defaultVariants: {
    variant: "default",
    alignment: "center",
  },
});

function FeatureStack({
  variant = "default",
  alignment = "center",
  className,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof featureStackVariants>) {
  return (
    <div
      data-slot="feature-stack"
      data-alignment={alignment}
      data-variant={variant}
      className={cn(featureStackVariants({ variant, alignment, className }))}
      {...props}
    />
  );
}

function FeatureStackIcon({
  className,
  icon,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "featured";
  icon: React.ReactElement<LucideProps>;
}) {
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
        <>
          <FeaturedIcon
            className={cn("lg:group-data-[variant=default]/feature-stack:hidden")}
            variant="circular"
            size="md"
          >
            {icon}
          </FeaturedIcon>

          <FeaturedIcon
            className={cn("hidden lg:group-data-[variant=default]/feature-stack:flex")}
            variant="circular"
            size="lg"
          >
            {icon}
          </FeaturedIcon>
        </>
      )}

      {variant === "default" && (
        <div className="[&_svg:not([class*='size-'])]:size-6 lg:[&_svg:not([class*='size-'])]:size-7">
          {icon}
        </div>
      )}
    </div>
  );
}

function FeatureStackContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="feature-stack-content"
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  );
}

function FeatureStackTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="feature-stack-title"
      className={cn(
        "text-foreground font-sans",
        "text-base leading-6 font-medium tracking-[-0.6px] lg:group-data-[variant=default]/feature-stack:text-xl lg:group-data-[variant=default]/feature-stack:leading-8 lg:group-data-[variant=default]/feature-stack:font-semibold",

        className
      )}
      {...props}
    />
  );
}

function FeatureStackBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="feature-stack-body"
      className={cn(
        "text-muted-foreground font-sans font-normal",
        "text-sm leading-5 lg:group-data-[variant=default]/feature-stack:text-lg lg:group-data-[variant=default]/feature-stack:leading-8",
        className
      )}
      {...props}
    />
  );
}

function FeatureStackAction({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="feature-stack-action" className={cn("w-full", className)} {...props} />;
}

export {
  FeatureStack,
  FeatureStackAction,
  FeatureStackBody,
  FeatureStackContent,
  FeatureStackIcon,
  FeatureStackTitle,
};
