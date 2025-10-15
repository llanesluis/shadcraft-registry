import { RegistryItem } from "shadcn/schema";
import { registryCategories } from "@/registry/registry-categories";

export function formatComponentName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function groupBlocksByCategories(blocks: RegistryItem[]) {
  const blocksByCategories = registryCategories.map((category) => ({
    title: category.title,
    slug: category.slug,
    blocks: blocks.filter((block) => block.categories?.includes(category.slug)),
    amount: blocks.filter((block) => block.categories?.includes(category.slug)).length,
  }));

  return blocksByCategories;
}

export function getRegistryItemJsonUrl(name: string): string {
  return `https://shadcraft-registry.vercel.app/r/${name}.json`;
}

export function getRegistryItemsJsonUrls(...names: string[]): string[] {
  return names.map((name) => getRegistryItemJsonUrl(name));
}
