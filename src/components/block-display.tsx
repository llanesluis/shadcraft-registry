import * as React from "react";

import { BlockViewer } from "@/components/block-viewer";
import { getRegistryItem } from "@/lib/registry";

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name);
});

export async function BlockDisplay({ name }: { name: string }) {
  const item = await getCachedRegistryItem(name);

  if (!item?.files) return null;

  return <BlockViewer item={item} />;
}
