import { Link2, LucideIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

function BlogImage({ className, ...props }: React.ComponentProps<"figure">) {
  return (
    <figure
      data-slot="blog-image"
      className={cn("flex flex-col gap-3.5 py-5 lg:py-9", className)}
      {...props}
    />
  );
}

function BlogImageImage({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="blog-image-image"
      className={cn(
        "overflow-hidden rounded-2xl",
        // image defaults
        "[&_img:not([class*='aspect-'])]:aspect-auto [&_img:not([class*='size-'])]:h-auto [&_img:not([class*='size-'])]:w-full",
        className
      )}
      {...props}
    />
  );
}

function BlogImageCaption({
  icon: Icon = Link2,
  showIcon = true,
  className,
  children,
  ...props
}: React.ComponentProps<"figcaption"> & { icon?: LucideIcon; showIcon?: boolean }) {
  return (
    <figcaption
      data-slot="blog-image-caption"
      className={cn(
        "text-muted-foreground flex items-center gap-1.5 font-sans text-sm leading-5",
        className
      )}
      {...props}
    >
      {showIcon && <Icon className="text-muted-foreground size-4" aria-hidden="true" />}
      {children}
    </figcaption>
  );
}

function BlogImageAttribution({
  author,
  authorHref,
  source,
  sourceHref,
  prefix = "Photo by",
  separator = "on",
}: {
  author: string;
  authorHref?: string;
  source: string;
  sourceHref?: string;
  prefix?: string;
  separator?: string;
}) {
  const normalizedPrefix = prefix.trim();
  const normalizedSeparator = separator.trim();
  const normalizedAuthor = author.trim();
  const normalizedSource = source.trim();
  return (
    <span data-slot="blog-image-attribution" className="text-muted-foreground">
      <span>{normalizedPrefix}</span>{" "}
      {authorHref ? (
        <a className="underline" href={authorHref} target="_blank" rel="noopener noreferrer">
          {normalizedAuthor}
        </a>
      ) : (
        <span>{normalizedAuthor}</span>
      )}{" "}
      <span>{normalizedSeparator}</span>{" "}
      {sourceHref ? (
        <a className="underline" href={sourceHref} target="_blank" rel="noopener noreferrer">
          {normalizedSource}
        </a>
      ) : (
        <span>{normalizedSource}</span>
      )}
    </span>
  );
}

export { BlogImage, BlogImageAttribution, BlogImageCaption, BlogImageImage };
