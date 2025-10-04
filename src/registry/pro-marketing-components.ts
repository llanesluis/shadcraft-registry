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
  {
    name: "sub-feature",
    type: "registry:component",
    description:
      "A component that presents a smaller feature layout for a dialled-back look. This component balances detail with simplicity.",
    files: [
      {
        path: "components/sub-feature.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "featured-icon",
    type: "registry:component",
    description:
      "A component that places an icon inside a styled square or circle frame for extra prominence. This component makes supporting visuals stand out in marketing layouts.",
    files: [
      {
        path: "components/featured-icon.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "placeholder-ui",
    type: "registry:component",
    description:
      "A Placeholder that displays content in a device-style frame. This component helps showcase product UI.",
    registryDependencies: ["aspect-ratio"],
    files: [
      {
        path: "components/placeholder-ui.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
];
