export function formatComponentName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getRegistryItemJsonUrl(name: string): string {
  return `https://shadcraft-registry.vercel.app/r/${name}.json`;
}

export function getRegistryItemsJsonUrls(...names: string[]): string[] {
  return names.map((name) => getRegistryItemJsonUrl(name));
}
