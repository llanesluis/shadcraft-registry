import React from "react";

import { BlockDisplay } from "@/components/block-display";
import { getRegistryItems } from "@/lib/registry";

const cachedGetRegistryItems = React.cache(getRegistryItems);

export default async function HomePage() {
  const registryItems = cachedGetRegistryItems();

  return (
    <div className="flex flex-col gap-12">
      <main className="container mx-auto grid size-full gap-20 py-10">
        {registryItems.map((item) => (
          <BlockDisplay key={item.name} name={item.name} />
        ))}
      </main>
    </div>
  );
}
