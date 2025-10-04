import { Star } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

type StarRatingProps = {
  value: number;
  max?: number;
  label?: string;
  size?: "sm" | "md" | "lg";
  alignment?: "left" | "center" | "right";
  /**
   * Precision for partial stars. If set, the component will fill each star
   * proportionally (e.g., 3.2 -> 60% of the 4th star). Defaults to true.
   */
  allowPartial?: boolean;
  containerClassName?: string;
};

export function StarRating({
  value,
  max = 5,
  label,
  size = "lg",
  alignment = "center",
  allowPartial = true,
  className,
  containerClassName,
  ...props
}: StarRatingProps & Omit<React.ComponentProps<"div">, "children">) {
  const safeMax = Math.max(1, Math.floor(max));
  const clampedValue = Math.max(0, Math.min(value, safeMax));

  return (
    <div
      data-slot="star-rating"
      className={cn(
        "flex flex-col items-center gap-1.5",
        size === "sm" && "[--star-size:calc(--spacing(3.5))]",
        size === "md" && "[--star-size:calc(--spacing(4))]",
        size === "lg" && "[--star-size:calc(--spacing(5))]",
        alignment === "left" && "items-start text-left",
        alignment === "center" && "items-center text-center",
        alignment === "right" && "items-end text-right",
        containerClassName
      )}
      aria-label={`${clampedValue} out of ${safeMax} stars`}
      role="img"
      {...props}
    >
      <div className={cn("flex items-center", className)}>
        {Array.from({ length: safeMax }).map((_, index) => {
          const starIndex = index + 1;
          const filledRatio = allowPartial
            ? Math.max(0, Math.min(1, clampedValue - index))
            : clampedValue >= starIndex
              ? 1
              : 0;

          return (
            <span key={index} className="relative inline-flex" aria-hidden="true">
              {/* Base (unfilled) star */}
              <Star className="size-(--star-size)" />
              {/* Filled overlay */}
              {filledRatio > 0 ? (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${filledRatio * 100}%` }}
                >
                  <Star fill="currentColor" className="size-(--star-size)" />
                </span>
              ) : null}
            </span>
          );
        })}
      </div>

      {label ? (
        <span
          data-slot="star-rating-label"
          className="text-muted-foreground font-sans text-xs leading-4 font-normal"
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}
