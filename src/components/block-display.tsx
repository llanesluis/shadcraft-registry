import * as React from "react";

import { BlockViewer } from "@/components/block-viewer";
import {
  createFileTreeForRegistryItemFiles,
  getRegistryItem,
  RegistryItemFile,
} from "@/lib/registry";

export async function BlockDisplay({ name }: { name: string }) {
  const item = await getCachedRegistryItem(name);

  if (!item?.files) return null;

  const tree = getCachedFileTree(item.files);
  const files = getCachedFiles(item.files);

  return <BlockViewer item={item} tree={tree} files={files} />;
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
