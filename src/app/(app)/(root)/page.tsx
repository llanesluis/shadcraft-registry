import Link from "next/link";

import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { getBlockItems, getComponentItems, getUiItems } from "@/lib/registry";
import { ArrowUpRight } from "lucide-react";

export default async function HomePage() {
  const registryUiItems = getUiItems();
  const registryComponentItems = getComponentItems();
  const registryBlockItems = getBlockItems();

  return (
    <main className="space-y-10">
      <PageHeader>
        <span className="code-inline w-fit font-mono font-medium">registry</span>
        <PageHeaderHeading>Shadcraft Registry</PageHeaderHeading>
        <PageHeaderDescription>
          A collection of UI elements, components, blocks, and templates for Shadcraft.
        </PageHeaderDescription>
      </PageHeader>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">UI</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {registryUiItems.map((item) => (
            <Link
              href={`/ui/${item.name}`}
              key={item.name}
              className="group/link flex items-center gap-2 font-mono"
            >
              {item.title}
              <ArrowUpRight className="size-4 opacity-0 transition-all group-hover/link:opacity-100" />
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Components</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {registryComponentItems.map((item) => (
            <Link
              href={`/components/${item.name}`}
              key={item.name}
              className="group/link flex items-center gap-2 font-mono"
            >
              {item.title}
              <ArrowUpRight className="size-4 opacity-0 transition-all group-hover/link:opacity-100" />
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold"> Blocks</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {registryBlockItems.map((item) => (
            <Link
              href={`/blocks/${item.name}`}
              key={item.name}
              className="group/link flex items-center gap-2 font-mono"
            >
              {item.title}
              <ArrowUpRight className="size-4 opacity-0 transition-all group-hover/link:opacity-100" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
