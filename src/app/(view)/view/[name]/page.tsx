import { notFound } from "next/navigation";
import React from "react";

import { TailwindIndicator } from "@/components/tailwind-indicator";
import { getRegistryItem, getRegistryRenderComponent } from "@/lib/registry";
import { cn } from "@/lib/utils";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name);
});

export const generateStaticParams = async () => {
  const { Index } = await import("@/registry/__index__");

  const params = Object.values(Index)
    .filter((block) => ["registry:example", "registry:block"].includes(block.type))
    .map((block) => ({ name: block.name }));
  return params;
};

export default async function ViewPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const item = await getCachedRegistryItem(name);

  if (!item) {
    return notFound();
  }

  let itemName = name;
  const { type } = item;
  if (type === "registry:ui" || type === "registry:component") {
    itemName = `${name}-example`;
  }
  const RenderComponent = getRegistryRenderComponent(itemName);

  if (!RenderComponent) {
    return notFound();
  }

  return (
    <>
      <main
        className={cn(
          item.type !== "registry:block" && "flex size-full min-h-svh items-center justify-center",
          item.meta?.containerClassName
        )}
      >
        <RenderComponent />
      </main>

      <TailwindIndicator showInProduction={true} />
    </>
  );
}
