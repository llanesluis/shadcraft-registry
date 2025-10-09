import { type Registry } from "shadcn/schema";

import { getRegistryItemJsonUrl, getRegistryItemsJsonUrls } from "@/utils/registry";

export const examples: Registry["items"] = [
  {
    name: "blog-blockquote-example",
    title: "Blog Blockquote Example",
    type: "registry:example",
    registryDependencies: [getRegistryItemJsonUrl("blog-blockquote")],
    files: [
      {
        path: "examples/blog-blockquote-example.tsx",
        type: "registry:example",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "blog-image-example",
    title: "Blog Image Example",
    type: "registry:example",
    registryDependencies: [getRegistryItemJsonUrl("blog-image")],
    files: [
      {
        path: "examples/blog-image-example.tsx",
        type: "registry:example",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "chip-example",
    title: "Chip Example",
    type: "registry:example",
    registryDependencies: [getRegistryItemJsonUrl("chip")],
    files: [
      {
        path: "examples/chip-example.tsx",
        type: "registry:example",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "feature-stack-example",
    title: "Feature Stack Example",
    type: "registry:example",
    registryDependencies: ["button", getRegistryItemJsonUrl("feature-stack")],
    files: [
      {
        path: "examples/feature-stack-example.tsx",
        type: "registry:example",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "featured-icon-example",
    title: "Featured Icon Example",
    type: "registry:example",
    registryDependencies: [getRegistryItemJsonUrl("featured-icon")],
    files: [
      {
        path: "examples/featured-icon-example.tsx",
        type: "registry:example",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "heading-example",
    title: "Heading Example",
    type: "registry:example",
    registryDependencies: [getRegistryItemJsonUrl("heading")],
    files: [
      {
        path: "examples/heading-example.tsx",
        type: "registry:example",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "job-listing-example",
    title: "Job Listing Example",
    type: "registry:example",
    registryDependencies: ["button", ...getRegistryItemsJsonUrls("job-listing", "chip")],
    files: [
      {
        path: "examples/job-listing-example.tsx",
        type: "registry:example",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "metric-example",
    title: "Metric Example",
    type: "registry:example",
    registryDependencies: [getRegistryItemJsonUrl("metric")],
    files: [
      {
        path: "examples/metric-example.tsx",
        type: "registry:example",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "pricing-card-example",
    title: "Pricing Card Example",
    type: "registry:example",
    registryDependencies: [getRegistryItemJsonUrl("pricing-card")],
    files: [
      {
        path: "examples/pricing-card-example.tsx",
        type: "registry:example",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "profile-card-example",
    title: "Profile Card Example",
    type: "registry:example",
    registryDependencies: [getRegistryItemJsonUrl("profile-card")],
    files: [
      {
        path: "examples/profile-card-example.tsx",
        type: "registry:example",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "section-heading-example",
    title: "Section Heading Example",
    type: "registry:example",
    registryDependencies: [getRegistryItemJsonUrl("section-heading")],
    files: [
      {
        path: "examples/section-heading-example.tsx",
        type: "registry:example",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "star-rating-example",
    title: "Star Rating Example",
    type: "registry:example",
    registryDependencies: [getRegistryItemJsonUrl("star-rating")],
    files: [
      {
        path: "examples/star-rating-example.tsx",
        type: "registry:example",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "sub-feature-example",
    title: "Sub Feature Example",
    type: "registry:example",
    registryDependencies: [getRegistryItemJsonUrl("sub-feature")],
    files: [
      {
        path: "examples/sub-feature-example.tsx",
        type: "registry:example",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "ui-showcase-example",
    title: "UI Showcase Example",
    type: "registry:example",
    registryDependencies: [getRegistryItemJsonUrl("ui-showcase")],
    files: [
      {
        path: "examples/ui-showcase-example.tsx",
        type: "registry:example",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
];
