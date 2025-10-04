import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function JobListing({
  variant = "default",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "card";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        variant === "default" && "border-t pt-3 pb-4",
        variant === "card" && "bg-card rounded-2xl border p-5 shadow-sm lg:p-9",
        className
      )}
      {...props}
    />
  );
}

function JobListingHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="job-listing-header"
      className={cn(
        "group/header grid auto-rows-min grid-rows-[auto_auto] items-start gap-x-9 not-has-data-[slot=job-listing-badge]:grid-rows-1 not-has-data-[slot=job-listing-badge]:items-center has-data-[slot=job-listing-action]:grid-cols-[1fr_auto] has-data-[slot=job-listing-badge]:grid-cols-[1fr_auto]",
        className
      )}
      {...props}
    />
  );
}

function JobListingTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="job-listing-title"
      className={cn(
        "text-foreground font-sans text-base leading-6 font-medium group-not-has-data-[slot=job-listing-action]/header:col-span-full",
        className
      )}
      {...props}
    />
  );
}

function JobListingDescription({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <p
      data-slot="job-listing-description"
      className={cn("text-muted-foreground font-sans text-base leading-6 font-normal", className)}
      {...props}
    />
  );
}

function JobListingBadge({ className, ...props }: React.ComponentProps<typeof Badge>) {
  return (
    <Badge
      data-slot="job-listing-badge"
      variant="secondary"
      className={cn(
        "row-span-1 row-start-1 mb-2 self-start justify-self-start group-not-has-data-[slot=job-listing-action]/header:col-span-full",
        className
      )}
      {...props}
    />
  );
}

function JobListingAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="job-listing-action"
      className={cn("col-start-2 row-span-full row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  );
}
function JobListingContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="job-listing-content"
      className={cn("font-sans text-sm font-normal text-pretty", className)}
      {...props}
    />
  );
}

function JobListingFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="job-listing-footer"
      className={cn("flex flex-wrap items-start gap-3", className)}
      {...props}
    />
  );
}

export {
  JobListing,
  JobListingAction,
  JobListingBadge,
  JobListingContent,
  JobListingDescription,
  JobListingFooter,
  JobListingHeader,
  JobListingTitle,
};
