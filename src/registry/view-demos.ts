import * as React from "react";

import { getComponentItems } from "@/lib/registry";

const REGISTRY_PATH = "@/registry/pro-marketing";

type ViewComponent<Props = Record<string, never>> = React.LazyExoticComponent<
  React.ComponentType<Props>
>;

// Shadcraft Pro Marketing Components
const cachedGetComponentItems = React.cache(getComponentItems);

export const ProMarketingComponents = Object.fromEntries(
  cachedGetComponentItems().map((item) => {
    const Component = React.lazy(async () => {
      const mod = await import(`${REGISTRY_PATH}/examples/${item.name}-example`);
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;

      return { default: mod.default || mod[exportName] };
    });

    return [item.name, Component] as const;
  })
) satisfies Record<string, ViewComponent>;

// TODO: Shadcraft Pro Marketing Blocks

// TODO: Shadcraft Pro Marketing Templates

export const REGISTRY_VIEW_DEMOS = {
  ...ProMarketingComponents,
} satisfies Record<string, ViewComponent>;
