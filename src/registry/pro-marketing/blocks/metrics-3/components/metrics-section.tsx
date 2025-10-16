import { ArrowRight } from "lucide-react";

import {
  Metric,
  MetricActionButton,
  MetricLabel,
  MetricSubLabel,
} from "@/registry/pro-marketing/components/metric";
import {
  SectionHeading,
  SectionHeadingBody,
  SectionHeadingTitle,
} from "@/registry/pro-marketing/components/section-heading";

export function MetricsSection() {
  return (
    <section className="grid w-full gap-5 md:gap-9 lg:grid-cols-2">
      <div className="flex flex-col gap-5 self-center md:gap-9">
        <SectionHeading>
          <SectionHeadingTitle className="text-5xl">
            Trusted by Teams Everywhere
          </SectionHeadingTitle>
          <SectionHeadingBody>
            Acme Inc. is helping thousands of creators and companies move faster, work smarter, and
            deliver with confidence.
          </SectionHeadingBody>
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2 md:gap-x-9 md:gap-y-8">
          <Metric>
            <MetricLabel>12,500+</MetricLabel>
            <MetricSubLabel>Projects completed</MetricSubLabel>
            <MetricActionButton>
              Our clients <ArrowRight />
            </MetricActionButton>
          </Metric>

          <Metric>
            <MetricLabel>38% faster</MetricLabel>
            <MetricSubLabel>Delivery across teams</MetricSubLabel>
            <MetricActionButton>
              Learn more <ArrowRight />
            </MetricActionButton>
          </Metric>

          <Metric>
            <MetricLabel>94%</MetricLabel>
            <MetricSubLabel>User satisfaction</MetricSubLabel>
            <MetricActionButton>
              See feedback <ArrowRight />
            </MetricActionButton>
          </Metric>

          <Metric>
            <MetricLabel>8 zones</MetricLabel>
            <MetricSubLabel>With active customers</MetricSubLabel>
            <MetricActionButton>
              Our users <ArrowRight />
            </MetricActionButton>
          </Metric>
        </div>
      </div>

      <div className="aspect-square overflow-hidden rounded-2xl">
        <img src="/assets/metrics-3.jpg" className="size-full object-cover" />
      </div>
    </section>
  );
}
