import { Metric, MetricLabel, MetricSubLabel } from "@/registry/pro-marketing/components/metric";

export function MetricsSection() {
  return (
    <section className="flex w-full flex-col gap-5 md:gap-9">
      <div className="aspect-[21/9] h-auto w-full overflow-hidden mask-y-from-60%">
        <img src="/assets/map.svg" className="size-full object-cover" />
      </div>
      <div className="grid gap-5 md:grid-cols-2 md:gap-9 lg:grid-cols-4">
        <Metric>
          <MetricLabel>12,500+</MetricLabel>
          <MetricSubLabel>Projects completed</MetricSubLabel>
        </Metric>

        <Metric>
          <MetricLabel>38% faster</MetricLabel>
          <MetricSubLabel>Delivery across teams</MetricSubLabel>
        </Metric>

        <Metric>
          <MetricLabel>94%</MetricLabel>
          <MetricSubLabel>User satisfaction</MetricSubLabel>
        </Metric>

        <Metric>
          <MetricLabel>8 zones</MetricLabel>
          <MetricSubLabel>With active customers</MetricSubLabel>
        </Metric>
      </div>
    </section>
  );
}
