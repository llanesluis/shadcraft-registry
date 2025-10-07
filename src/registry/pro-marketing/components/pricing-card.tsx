import { Check, Star, type LucideIcon } from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function PricingCard({
  mostPopular = false,
  variant = "default",
  className,
  ...props
}: React.ComponentProps<"div"> & { mostPopular?: boolean; variant?: "default" | "wide" }) {
  return (
    <div
      data-slot="pricing-card"
      data-most-popular={mostPopular}
      data-variant={variant}
      className={cn(
        "group/pricing-card bg-card @container relative grid w-full max-w-xl gap-4 rounded-2xl border p-6 shadow-sm has-data-[slot=pricing-card-badge]:py-9 lg:p-9 lg:has-data-[slot=pricing-card-badge]:py-12",
        mostPopular && "border-primary border-2",
        variant === "wide" && "max-w-5xl grid-cols-6",
        className
      )}
      {...props}
    />
  );
}

function PricingCardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="pricing-card-header"
      className={cn(
        "col-span-full flex flex-col",
        "@md:group-data-[variant=wide]/pricing-card:col-span-3 @md:group-data-[variant=wide]/pricing-card:col-start-1 @md:group-data-[variant=wide]/pricing-card:self-end-safe",
        className
      )}
      {...props}
    />
  );
}

function PricingCardIcon({
  className,
  icon: Icon = Star,
  ...props
}: React.ComponentProps<LucideIcon> & { icon: LucideIcon }) {
  return (
    <div
      data-slot="pricing-card-icon"
      className="col-span-full @md:group-data-[variant=wide]/pricing-card:col-span-full @md:group-data-[variant=wide]/pricing-card:row-start-1"
    >
      <Icon className={cn("text-foreground size-6", className)} {...props} />
    </div>
  );
}

function PricingCardBadge({ className, ...props }: React.ComponentProps<typeof Badge>) {
  return (
    <>
      <Badge
        data-slot="pricing-card-badge"
        variant="default"
        className={cn(
          "absolute top-3 right-3 group-not-data-[most-popular=true]/pricing-card:hidden",
          className
        )}
        {...props}
      />

      <Badge
        data-slot="pricing-card-badge"
        variant="secondary"
        className={cn(
          "absolute top-3 right-3 group-data-[most-popular=true]/pricing-card:hidden",
          className
        )}
        {...props}
      />
    </>
  );
}

function PricingCardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="pricing-card-title"
      className={cn("text-foreground font-sans text-lg leading-8 font-medium", className)}
      {...props}
    />
  );
}

function PricingCardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="pricing-card-description"
      className={cn("text-muted-foreground font-sans text-sm leading-5 font-normal", className)}
      {...props}
    />
  );
}

function PricingCardCTAButton({
  className,
  size = "lg",
  variant = "default",
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="pricing-card-button"
      size={size}
      variant={variant}
      className={cn(
        "col-span-full w-full",
        "@md:group-data-[variant=wide]/pricing-card:col-span-full",
        className
      )}
      {...props}
    />
  );
}

function PricingCardPricing({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="pricing-card-pricing"
      className={cn(
        "col-span-full grid grid-cols-[auto_1fr] grid-rows-2 items-start gap-x-2",
        "@md:group-data-[variant=wide]/pricing-card:col-span-3 @md:group-data-[variant=wide]/pricing-card:col-start-4 @md:group-data-[variant=wide]/pricing-card:justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function PricingCardAmount({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="pricing-card-amount"
      className={cn(
        "text-foreground row-span-full self-end-safe font-sans text-6xl leading-none font-bold tracking-[-2.5%]",
        className
      )}
      {...props}
    />
  );
}

function PricingCardDetails({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="pricing-card-details"
      className={cn("row-span-full flex flex-col self-end-safe", className)}
      {...props}
    />
  );
}

function PricingCardCadence({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="pricing-card-cadence"
      className={cn(
        "text-foreground col-start-2 font-sans text-sm leading-5 font-medium",
        className
      )}
      {...props}
    />
  );
}

function PricingCardFinePrint({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="pricing-card-fine-print"
      className={cn(
        "text-muted-foreground col-start-2 w-full font-sans text-sm font-normal",
        className
      )}
      {...props}
    />
  );
}

function PricingCardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="pricing-card-content"
      className={cn(
        "col-span-full flex flex-col gap-4 lg:pt-4",
        "@md:group-data-[variant=wide]/pricing-card:col-span-full",
        className
      )}
      {...props}
    />
  );
}

function PricingCardFeatures({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="pricing-card-features"
      className={cn(
        "col-span-full gap-3 space-y-3",
        "@md:group-data-[variant=wide]/pricing-card:col-span-full @md:group-data-[variant=wide]/pricing-card:columns-2 @md:group-data-[variant=wide]/pricing-card:space-x-4",
        className
      )}
      {...props}
    />
  );
}

function PricingCardListItem({
  icon: Icon = Check,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  icon?: LucideIcon;
}) {
  return (
    <div
      data-slot="pricing-card-list-item"
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {Icon && <Icon className="text-muted-foreground size-5 shrink-0 lg:size-6" />}
      <span className="text-foreground font-sans text-sm leading-5 font-normal lg:text-base">
        {children}
      </span>
    </div>
  );
}

export {
  PricingCard,
  PricingCardAmount,
  PricingCardBadge,
  PricingCardCadence,
  PricingCardContent,
  PricingCardCTAButton,
  PricingCardDescription,
  PricingCardDetails,
  PricingCardFeatures,
  PricingCardFinePrint,
  PricingCardHeader,
  PricingCardIcon,
  PricingCardListItem,
  PricingCardPricing,
  PricingCardTitle,
};
