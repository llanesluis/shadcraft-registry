import { Registry } from "shadcn/schema";

export const registryUI: Registry["items"] = [
  {
    name: "heading",
    title: "Heading",
    type: "registry:ui",
    description: "Pending",
    dependencies: ["@radix-ui/react-slot"],
    files: [
      {
        path: "ui/heading.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
];
