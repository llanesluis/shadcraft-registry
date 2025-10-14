import * as React from "react";

import { DemoViewer } from "@/components/demo-viewer";
import {
  createFileTreeForRegistryItemFiles,
  getRegistryItem,
  RegistryItemFile,
} from "@/lib/registry";

export async function DemoDisplay({
  name,
  showHeader = true,
}: {
  name: string;
  showHeader?: boolean;
}) {
  const item = await getCachedRegistryItem(name);

  if (!item?.files) return null;

  const tree = getCachedFileTree(item.files);
  const files = getCachedFiles(item.files);

  return <DemoViewer item={item} tree={tree} files={files} showHeader={showHeader} />;
}

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name);
});

const getCachedFileTree = React.cache((files: Array<{ path: string; target?: string }>) => {
  if (!files) return null;
  const fileTree = createFileTreeForRegistryItemFiles(files);
  return fileTree;
});

const getCachedFiles = React.cache((files: RegistryItemFile[]) => {
  if (!files) return null;
  const filesWithContent = files.map((file) => ({
    ...file,
    content: file.content ?? "",
  }));
  return filesWithContent;
});
