import { notFound } from "next/navigation";
import React from "react";

import { REGISTRY_DEMOS } from "@/app/(view)/view/[name]";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { getRegistryItem, getRegistryItems } from "@/lib/registry";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name);
});

export const generateStaticParams = async () => {
  return getRegistryItems().map((item) => ({ name: item.name }));
};

export default async function ViewPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const item = await getCachedRegistryItem(name);
  const RegistryItem = REGISTRY_DEMOS[name as keyof typeof REGISTRY_DEMOS];

  if (!item || !RegistryItem) {
    return notFound();
  }

  return (
    <>
      <div className="scrollbar-thin container mx-auto flex size-full items-center justify-center p-8">
        <RegistryItem />
      </div>

      <TailwindIndicator showInProduction={true} />
    </>
  );
}
