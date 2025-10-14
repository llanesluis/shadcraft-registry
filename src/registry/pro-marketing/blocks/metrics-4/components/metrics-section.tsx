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
    <section className="flex w-full flex-col gap-5 md:gap-9">
      <SectionHeading alignment="center" className="mx-auto w-full max-w-3xl">
        <SectionHeadingTitle>Trusted by Teams Everywhere</SectionHeadingTitle>
        <SectionHeadingBody>
          Acme Inc. is helping thousands of creators and companies move faster.
        </SectionHeadingBody>
      </SectionHeading>

      <div className="grid justify-center gap-5 md:grid-cols-2 md:gap-9 lg:grid-cols-4">
        <Metric alignment="center">
          <MetricLabel>12,500+</MetricLabel>
          <MetricSubLabel>Projects completed with Acme AI</MetricSubLabel>
          <MetricActionButton>
            Our clients <ArrowRight />
          </MetricActionButton>
        </Metric>

        <Metric alignment="center">
          <MetricLabel>38% faster</MetricLabel>
          <MetricSubLabel>Delivery across teams</MetricSubLabel>
          <MetricActionButton>
            Learn more <ArrowRight />
          </MetricActionButton>
        </Metric>

        <Metric alignment="center">
          <MetricLabel>94%</MetricLabel>
          <MetricSubLabel>User satisfaction reported</MetricSubLabel>
          <MetricActionButton>
            See feedback <ArrowRight />
          </MetricActionButton>
        </Metric>

        <Metric alignment="center">
          <MetricLabel>8 countries</MetricLabel>
          <MetricSubLabel>With active customers</MetricSubLabel>
          <MetricActionButton>
            Our users <ArrowRight />
          </MetricActionButton>
        </Metric>
      </div>
    </section>
  );
}
