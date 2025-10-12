import { type Registry } from "shadcn/schema";

import { getRegistryItemJsonUrl, getRegistryItemsJsonUrls } from "@/utils/registry";

export const blocks: Registry["items"] = [
  {
    name: "banner-1",
    title: "Banner 1",
    type: "registry:block",
    registryDependencies: ["button", "input", getRegistryItemJsonUrl("featured-icon")],
    files: [
      {
        path: "blocks/banner-1/page.tsx",
        type: "registry:page",
        target: "app/banner/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "banner-2",
    title: "Banner 2",
    type: "registry:block",
    registryDependencies: ["button", getRegistryItemJsonUrl("featured-icon")],
    files: [
      {
        path: "blocks/banner-2/page.tsx",
        type: "registry:page",
        target: "app/banner/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "banner-3",
    title: "Banner 3",
    type: "registry:block",
    registryDependencies: ["button", getRegistryItemJsonUrl("featured-icon")],
    files: [
      {
        path: "blocks/banner-3/page.tsx",
        type: "registry:page",
        target: "app/banner/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "banner-4",
    title: "Banner 4",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/banner-4/page.tsx",
        type: "registry:page",
        target: "app/banner/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "careers-1",
    title: "Careers 1",
    type: "registry:block",
    registryDependencies: [
      "button",
      "separator",
      ...getRegistryItemsJsonUrls("job-listing", "section-heading", "chip"),
    ],
    files: [
      {
        path: "blocks/careers-1/page.tsx",
        type: "registry:page",
        target: "app/careers/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "careers-2",
    title: "Careers 2",
    type: "registry:block",
    registryDependencies: [
      "button",
      "separator",
      ...getRegistryItemsJsonUrls("job-listing", "section-heading", "chip"),
    ],
    files: [
      {
        path: "blocks/careers-2/page.tsx",
        type: "registry:page",
        target: "app/careers/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "careers-3",
    title: "Careers 3",
    type: "registry:block",
    registryDependencies: [
      "button",
      ...getRegistryItemsJsonUrls("job-listing", "section-heading", "chip"),
    ],
    files: [
      {
        path: "blocks/careers-3/page.tsx",
        type: "registry:page",
        target: "app/careers/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "careers-4",
    title: "Careers 4",
    type: "registry:block",
    registryDependencies: [
      "button",
      "separator",
      ...getRegistryItemsJsonUrls("job-listing", "section-heading", "chip"),
    ],
    files: [
      {
        path: "blocks/careers-4/page.tsx",
        type: "registry:page",
        target: "app/careers/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "footer-1",
    title: "Footer 1",
    type: "registry:block",
    registryDependencies: ["badge", "separator"],
    files: [
      {
        path: "blocks/footer-1/page.tsx",
        type: "registry:page",
        target: "app/footer/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "footer-2",
    title: "Footer 2",
    type: "registry:block",
    registryDependencies: ["input", "button", "badge", "separator"],
    files: [
      {
        path: "blocks/footer-2/page.tsx",
        type: "registry:page",
        target: "app/footer/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "footer-3",
    title: "Footer 3",
    type: "registry:block",
    registryDependencies: ["separator"],
    files: [
      {
        path: "blocks/footer-3/page.tsx",
        type: "registry:page",
        target: "app/footer/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "metrics-1",
    title: "Metrics 1",
    type: "registry:block",
    registryDependencies: [getRegistryItemJsonUrl("metric")],
    files: [
      {
        path: "blocks/metrics-1/page.tsx",
        type: "registry:page",
        target: "app/metrics/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "metrics-2",
    title: "Metrics 2",
    type: "registry:block",
    registryDependencies: [...getRegistryItemsJsonUrls("section-heading", "metric")],
    files: [
      {
        path: "blocks/metrics-2/page.tsx",
        type: "registry:page",
        target: "app/metrics/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "metrics-3",
    title: "Metrics 3",
    type: "registry:block",
    registryDependencies: [...getRegistryItemsJsonUrls("section-heading", "metric")],
    files: [
      {
        path: "blocks/metrics-3/page.tsx",
        type: "registry:page",
        target: "app/metrics/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "metrics-4",
    title: "Metrics 4",
    type: "registry:block",
    registryDependencies: [...getRegistryItemsJsonUrls("section-heading", "metric")],
    files: [
      {
        path: "blocks/metrics-4/page.tsx",
        type: "registry:page",
        target: "app/metrics/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "metrics-5",
    title: "Metrics 5",
    type: "registry:block",
    registryDependencies: [...getRegistryItemsJsonUrls("section-heading", "metric")],
    files: [
      {
        path: "blocks/metrics-5/page.tsx",
        type: "registry:page",
        target: "app/metrics/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "metrics-6",
    title: "Metrics 6",
    type: "registry:block",
    registryDependencies: [...getRegistryItemsJsonUrls("section-heading", "metric")],
    files: [
      {
        path: "blocks/metrics-6/page.tsx",
        type: "registry:page",
        target: "app/metrics/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "metrics-7",
    title: "Metrics 7",
    type: "registry:block",
    registryDependencies: [...getRegistryItemsJsonUrls("section-heading", "metric")],
    files: [
      {
        path: "blocks/metrics-7/page.tsx",
        type: "registry:page",
        target: "app/metrics/page.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
];
