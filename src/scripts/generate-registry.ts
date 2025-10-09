#!/usr/bin/env tsx

import { registry } from "@/registry";

import { exec } from "child_process";
import fs from "fs/promises";
import path from "path";
import { Registry, RegistryItem, registrySchema } from "shadcn/schema";

/*
  In order to keep the registry items organized by bundle such as Pro Marketing, Pro Product (soon)
  I figured it was a good idea to append the bundle name to the `meta` object in every item.
  {
    name: "profile-card",
    type: "registry:component",
    description:
      "An extension of the avatar component...",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "components/profile-card.tsx", // <------- Keep the file path simple, add prefix "src/registry/{bundle}/" later.
        type: "registry:component",
      },
    ],
    meta: {
      bundle: "pro-marketing", // <------- This is the bundle name.
    },
  },
*/
function fixRegistryItemPathsWithMetaBundle(item: RegistryItem) {
  const files = item.files?.map((file) => {
    // Skip if the file path already includes "src/registry"
    // We assume the full path is already fixed
    if (file.path.includes("src/registry")) {
      return file;
    }

    if (!item.meta?.bundle) {
      throw new Error(`⚠️ Property \`item.meta.bundle\` is required. Make sure every item in the registry specifies a bundle name.

        ✔️ Example: 

        { 
          ...item, 
          meta: { 
            bundle : "pro-marketing" 
          } 
        }
        `);
    }

    return {
      ...file,
      path: `src/registry/${item.meta.bundle}/${file.path}`,
    };
  });

  return {
    ...item,
    files,
  };
}

async function buildRegistryJsonFile(registryObject: unknown) {
  // 1. Fix the path for registry items.
  //    example: components/profile-card.tsx -> src/registry/pro-marketing/components/profile-card.tsx
  const registry = registrySchema.parse(registryObject);

  const fixedRegistry = {
    ...registry,
    items: registry.items.map(fixRegistryItemPathsWithMetaBundle),
  } satisfies Registry;

  // 2. Write the fixed registry to the JSON file.
  const fixedRegistryJson = JSON.stringify(fixedRegistry, null, 2);
  const outputPath = path.resolve(process.cwd(), "registry.json");
  const dir = path.dirname(outputPath);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(outputPath, fixedRegistryJson, "utf8");

  // 3. Format the registry.json file.
  exec(`prettier --write registry.json`);

  return outputPath;
}

async function main() {
  console.log(`🔄 Generating registry.json`);
  await buildRegistryJsonFile(registry);
  console.log(`✅ Generated registry.json`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
