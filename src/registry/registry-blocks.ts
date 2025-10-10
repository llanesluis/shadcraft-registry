import { type Registry } from "shadcn/schema";

import { getRegistryItemsJsonUrls } from "@/utils/registry";

export const blocks: Registry["items"] = [
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
