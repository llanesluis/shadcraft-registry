import { Activity } from "lucide-react";

import { FeaturedIcon } from "@/registry/pro-marketing/components/featured-icon";

export function FeaturedIconExample() {
  return (
    <div className="flex flex-wrap justify-center gap-8 px-4 py-8 lg:px-8">
      <div className="flex gap-8">
        <FeaturedIcon size="lg">
          <Activity />
        </FeaturedIcon>
        <FeaturedIcon size="md">
          <Activity />
        </FeaturedIcon>
        <FeaturedIcon size="sm">
          <Activity />
        </FeaturedIcon>
      </div>

      <div className="flex gap-8">
        <FeaturedIcon size="lg" variant="square">
          <Activity />
        </FeaturedIcon>
        <FeaturedIcon size="md" variant="square">
          <Activity />
        </FeaturedIcon>
        <FeaturedIcon size="sm" variant="square">
          <Activity />
        </FeaturedIcon>
      </div>
    </div>
  );
}
