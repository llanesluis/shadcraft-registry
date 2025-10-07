import { ArrowRight } from "lucide-react";

import {
  Metric,
  MetricActionButton,
  MetricLabel,
  MetricSubLabel,
} from "@/registry/pro-marketing/components/metric";

export function MetricExample() {
  return (
    <div className="grid size-full gap-20">
      <div className="grid gap-8 lg:grid-cols-3">
        <Metric size="lg">
          <MetricLabel>12,500+</MetricLabel>
          <MetricSubLabel>Projects completed with Acme AI</MetricSubLabel>
          <MetricActionButton>
            Our clients <ArrowRight />
          </MetricActionButton>
        </Metric>

        <Metric size="lg">
          <MetricLabel>38% faster</MetricLabel>
          <MetricSubLabel>Delivery across teams</MetricSubLabel>
          <MetricActionButton>
            Learn more <ArrowRight />
          </MetricActionButton>
        </Metric>

        <Metric size="lg">
          <MetricLabel>8 countries</MetricLabel>
          <MetricSubLabel>With active customers and growing</MetricSubLabel>
          <MetricActionButton>
            Our users <ArrowRight />
          </MetricActionButton>
        </Metric>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Metric>
          <MetricLabel>12,500+</MetricLabel>
          <MetricSubLabel>Projects completed with Acme AI</MetricSubLabel>
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
          <MetricSubLabel>User satisfaction reported</MetricSubLabel>
          <MetricActionButton>
            Learn more <ArrowRight />
          </MetricActionButton>
        </Metric>

        <Metric>
          <MetricLabel>8 countries</MetricLabel>
          <MetricSubLabel>With active customers and growing</MetricSubLabel>
          <MetricActionButton>
            Our users <ArrowRight />
          </MetricActionButton>
        </Metric>
      </div>

      <div className="mx-auto grid gap-8 lg:grid-cols-3">
        <Metric alignment="center" size="lg">
          <MetricLabel>12,500+</MetricLabel>
          <MetricSubLabel>Projects completed with Acme AI</MetricSubLabel>
          <MetricActionButton>
            Our clients <ArrowRight />
          </MetricActionButton>
        </Metric>

        <Metric alignment="center" size="lg">
          <MetricLabel>38% faster</MetricLabel>
          <MetricSubLabel>Delivery across teams</MetricSubLabel>
          <MetricActionButton>
            Learn more <ArrowRight />
          </MetricActionButton>
        </Metric>

        <Metric alignment="center" size="lg">
          <MetricLabel>8 countries</MetricLabel>
          <MetricSubLabel>With active customers and growing</MetricSubLabel>
          <MetricActionButton>
            Our users <ArrowRight />
          </MetricActionButton>
        </Metric>
      </div>

      <div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Metric alignment="center" className="bg-muted rounded-xl p-5 lg:p-9">
          <MetricLabel>12,500+</MetricLabel>
          <MetricSubLabel>Projects completed </MetricSubLabel>
        </Metric>

        <Metric alignment="center" className="bg-muted rounded-xl p-5 lg:p-9">
          <MetricLabel>38% faster</MetricLabel>
          <MetricSubLabel>Delivery across teams</MetricSubLabel>
        </Metric>

        <Metric alignment="center" className="bg-muted rounded-xl p-5 lg:p-9">
          <MetricLabel>94%</MetricLabel>
          <MetricSubLabel>User satisfaction reported</MetricSubLabel>
        </Metric>

        <Metric alignment="center" className="bg-muted rounded-xl p-5 lg:p-9">
          <MetricLabel>8 countries</MetricLabel>
          <MetricSubLabel>With active customers</MetricSubLabel>
        </Metric>
      </div>
    </div>
  );
}
