import { type Registry } from "shadcn/schema";

import { blocks } from "@/registry/registry-blocks";
import { components } from "@/registry/registry-components";
import { examples } from "@/registry/registry-examples";
import { ui } from "@/registry/registry-ui";

export const registry = {
  name: "Shadcraft",
  homepage: "https://shadcraft.com/",
  items: [...ui, ...components, ...examples, ...blocks],
} satisfies Registry;
