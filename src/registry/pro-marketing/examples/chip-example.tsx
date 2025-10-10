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

import { Chip } from "@/registry/pro-marketing/components/chip";

export function ChipExample() {
  return (
    <div className="grid grid-cols-2 gap-8 px-4 py-8 lg:px-8">
      <Chip label="Remote" icon={<MapPin />} />
      <Chip label="Full-time" icon={<Timer />} />
      <Chip label="Contract" icon={<Briefcase />} />
      <Chip label="Internship" icon={<GraduationCap />} />
      <Chip label="Salary" icon={<CircleDollarSign />} />
      <Chip label="Benefits" icon={<HeartHandshake />} />
      <Chip label="4 minutes read" icon={<Clock />} />
      <Chip label="On-site" icon={<Building />} />
    </div>
  );
}
