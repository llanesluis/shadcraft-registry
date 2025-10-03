import { Registry } from "shadcn/schema";

export const proMarketingComponents: Registry["items"] = [
  {
    name: "profile-card",
    type: "registry:component",
    description:
      "An extension of the avatar component with more details on the individual. Good for blog posts etc.",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "components/profile-card.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "blog-blockquote",
    type: "registry:component",
    description: "TBC",
    registryDependencies: ["https://shadcraft-registry.vercel.app/r/profile-card.json"],
    files: [
      {
        path: "components/blog-blockquote.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "chip",
    type: "registry:component",
    description:
      "A component that combines small text with an icon for quick callouts. This component highlights key values such as benefits, attributes, or job details.",
    files: [
      {
        path: "components/chip.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
];
