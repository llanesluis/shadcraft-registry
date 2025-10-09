import { Registry } from "shadcn/schema";

import { getRegistryItemsJsonUrls } from "@/utils/registry";

export const proMarketingBlocks: Registry["items"] = [
  {
    name: "careers-1",
    title: "Careers 1",
    type: "registry:block",
    description: "Pending",
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
  },
];
