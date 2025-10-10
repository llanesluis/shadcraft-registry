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
];
