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

export function Metrics6() {
  return (
    <section className="flex w-full flex-col gap-5 px-5 py-12 md:gap-9 lg:p-20">
      <SectionHeading className="w-full max-w-3xl lg:mx-auto lg:items-center lg:text-center">
        <SectionHeadingTitle className="text-4xl!">Trusted by Teams Everywhere</SectionHeadingTitle>
        <SectionHeadingBody>
          Acme Inc. is helping thousands of creators and companies move faster, work smarter, and
          deliver with confidence.
        </SectionHeadingBody>
      </SectionHeading>

      <div className="grid gap-5 md:grid-cols-2 md:gap-9 lg:grid-cols-4">
        <Metric size="lg">
          <MetricLabel>12,500+</MetricLabel>
          <MetricSubLabel>Projects completed</MetricSubLabel>
          <MetricActionButton className="mt-auto">
            Our clients <ArrowRight />
          </MetricActionButton>
        </Metric>

        <Metric size="lg">
          <MetricLabel>38% faster</MetricLabel>
          <MetricSubLabel>Delivery across teams</MetricSubLabel>
          <MetricActionButton className="mt-auto">
            Learn more <ArrowRight />
          </MetricActionButton>
        </Metric>

        <Metric size="lg">
          <MetricLabel>94%</MetricLabel>
          <MetricSubLabel>User satisfaction</MetricSubLabel>
          <MetricActionButton className="mt-auto">
            See feedback <ArrowRight />
          </MetricActionButton>
        </Metric>

        <Metric size="lg">
          <MetricLabel>8 zones</MetricLabel>
          <MetricSubLabel>With active customers</MetricSubLabel>
          <MetricActionButton className="mt-auto">
            Our users <ArrowRight />
          </MetricActionButton>
        </Metric>
      </div>
    </section>
  );
}
