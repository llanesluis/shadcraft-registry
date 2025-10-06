import { Activity } from "lucide-react";

import { FeaturedIcon } from "@/registry/pro-marketing/components/featured-icon";

export function FeaturedIconExample() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      <div className="flex gap-8">
        <FeaturedIcon size="lg" icon={Activity} />
        <FeaturedIcon size="md" icon={Activity} />
        <FeaturedIcon size="sm" icon={Activity} />
      </div>

      <div className="flex gap-8">
        <FeaturedIcon size="lg" variant="square" icon={Activity} />
        <FeaturedIcon size="md" variant="square" icon={Activity} />
        <FeaturedIcon size="sm" variant="square" icon={Activity} />
      </div>
    </div>
  );
}
