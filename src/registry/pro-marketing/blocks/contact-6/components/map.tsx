"use client";

import { cn } from "@/lib/utils";

type Coordinates = {
  lat: number;
  lng: number;
};

const EXAMPLE_COORDINATES: Coordinates = {
  lat: -33.86785,
  lng: 151.20732,
};

function buildGoogleMapsEmbedUrl(coords: Coordinates, zoom: number): string {
  const { lat, lng } = coords;
  // Uses standard maps URL with output=embed, no API key required
  const params = new URLSearchParams({
    q: `${lat},${lng}`,
    z: String(zoom),
    hl: "en",
    output: "embed",
  });
  return `https://www.google.com/maps?${params.toString()}`;
}

export function Map({
  zoom = 13,
  className,
  ...props
}: React.ComponentProps<"iframe"> & {
  zoom?: number;
  className?: string;
}) {
  return (
    <iframe
      title="Google Map"
      src={buildGoogleMapsEmbedUrl(EXAMPLE_COORDINATES, zoom)}
      className={cn("size-full", className)}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      {...props}
    />
  );
}
