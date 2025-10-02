import {
  Briefcase,
  Building,
  CircleDollarSign,
  Clock,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Timer,
} from "lucide-react";

import { FeatureChip } from "@/registry/pro-marketing/components/feature-chip";

export function FeatureChipExample() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <FeatureChip label="Remote" icon={MapPin} />
      <FeatureChip label="Full-time" icon={Timer} />
      <FeatureChip label="Contract" icon={Briefcase} />
      <FeatureChip label="Internship" icon={GraduationCap} />
      <FeatureChip label="Salary" icon={CircleDollarSign} />
      <FeatureChip label="Benefits" icon={HeartHandshake} />
      <FeatureChip label="4 minutes read" icon={Clock} />
      <FeatureChip label="On-site" icon={Building} />
    </div>
  );
}
