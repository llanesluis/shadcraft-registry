import { type Registry } from "shadcn/schema";

import { components } from "@/registry/registry-components";
import { ui } from "@/registry/registry-ui";

// The TypeScript registry is the source of truth.
// A build script generates the root-level registry.json from this object.
// @/scripts/generate-registry.ts
// run `pnpm registry:generate` to generate the registry.json file.
// and then run `pnpm registry:build` to build the shadcn/ui registry.

export const registry = {
  name: "Shadcraft",
  homepage: "https://shadcraft.com/",
  items: [...ui, ...components],
} satisfies Registry;
