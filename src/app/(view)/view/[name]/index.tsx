import { lazy, type ComponentType, type LazyExoticComponent } from "react";

type ViewComponent<Props = Record<string, never>> = LazyExoticComponent<ComponentType<Props>>;

// Shadcraft Pro Marketing Components
export const ProMarketingComponents = {
  "profile-card": lazy(() =>
    import("@/registry/pro-marketing/examples/profile-card-example").then((module) => ({
      default: module.ProfileCardExample,
    }))
  ),
  "blog-blockquote": lazy(() =>
    import("@/registry/pro-marketing/examples/blog-blockquote-example").then((module) => ({
      default: module.BlogBlockquoteExample,
    }))
  ),
} satisfies Record<string, ViewComponent>;

// TODO: Shadcraft Pro Marketing Blocks

// TODO: Shadcraft Pro Marketing Templates

export const REGISTRY_DEMOS = {
  ...ProMarketingComponents,
} satisfies Record<string, ViewComponent>;
