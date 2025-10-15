import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { getBlockItems, getComponentItems, getUiItems } from "@/lib/registry";
import { groupBlocksByCategories } from "@/utils/registry";

export default async function HomePage() {
  const registryUiItems = getUiItems();

  const registryComponentItems = getComponentItems();

  const blockItems = getBlockItems().filter((item) => item.type === "registry:block");
  const blockItemsByCategories = groupBlocksByCategories(blockItems);

  return (
    <>
      <PageHeader>
        <span className="code-inline w-fit font-mono font-medium">registry</span>
        <PageHeaderHeading>Shadcraft Registry</PageHeaderHeading>
        <PageHeaderDescription>
          A collection of UI elements, components, blocks, and tem plates for Shadcraft.
        </PageHeaderDescription>
      </PageHeader>

      <div className="space-y-16">
        <section className="space-y-4">
          <span className="code-inline w-fit font-mono font-medium">registry:ui</span>
          <h2 className="text-2xl font-semibold">UI</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {registryUiItems.map((item) => (
              <Link
                key={item.name}
                href={`/ui/${item.name}`}
                className="group/link flex items-center justify-between gap-2 font-mono"
              >
                {item.title}
                <ArrowUpRight className="size-4 opacity-0 transition-all group-hover/link:opacity-100" />
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <span className="code-inline w-fit font-mono font-medium">registry:component</span>
          <h2 className="text-2xl font-semibold">Components</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {registryComponentItems.map((item) => (
              <Link
                key={item.name}
                href={`/components/${item.name}`}
                className="group/link flex items-center justify-between gap-2 font-mono"
              >
                {item.title}
                <ArrowUpRight className="size-4 opacity-0 transition-all group-hover/link:opacity-100" />
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <span className="code-inline w-fit font-mono font-medium">registry:block</span>
          <h2 className="text-2xl font-semibold"> Blocks</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {blockItemsByCategories.map((item) => (
              <Link
                key={item.slug}
                href={`/blocks/${item.slug}`}
                className="group/link flex items-center justify-between gap-2 font-mono"
              >
                {item.title}
                <span className="flex items-center gap-2">
                  <span className="text-muted-foreground">{item.amount}</span>
                  <ArrowUpRight className="size-4 opacity-0 transition-all group-hover/link:opacity-100" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
