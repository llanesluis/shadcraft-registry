import { Metric, MetricLabel, MetricSubLabel } from "@/registry/pro-marketing/components/metric";

export default function Component() {
  return (
    <div className="flex w-full flex-col gap-5 md:gap-9">
      <div className="aspect-[21/9] h-auto w-full overflow-hidden">
        <img src="/assets/placeholder.svg" className="size-full object-cover" />
      </div>
      <div className="grid gap-5 md:grid-cols-2 md:gap-9 lg:grid-cols-4">
        <Metric>
          <MetricLabel>12,500+</MetricLabel>
          <MetricSubLabel>Projects completed with Acme AI</MetricSubLabel>
        </Metric>

        <Metric>
          <MetricLabel>38% faster</MetricLabel>
          <MetricSubLabel>Delivery across teams</MetricSubLabel>
        </Metric>

        <Metric>
          <MetricLabel>94%</MetricLabel>
          <MetricSubLabel>User satisfaction reported</MetricSubLabel>
        </Metric>

        <Metric>
          <MetricLabel>8 countries</MetricLabel>
          <MetricSubLabel>With active customers and growing</MetricSubLabel>
        </Metric>
      </div>
    </div>
  );
}
