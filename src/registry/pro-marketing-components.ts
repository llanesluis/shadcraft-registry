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
    name: "ui-showcase",
    type: "registry:component",
    description:
      "A Placeholder that displays content in a device-style frame. This component helps showcase product UI.",
    registryDependencies: ["aspect-ratio"],
    files: [
      {
        path: "components/ui-showcase.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "job-listing",
    type: "registry:component",
    description:
      "A component that displays open roles in a card format with a badge, title, short body, and feature chips. This component brings structure and clarity to careers pages.",
    registryDependencies: ["badge"],
    files: [
      {
        path: "components/job-listing.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "star-rating",
    type: "registry:component",
    description:
      "A component that displays ratings with stars and an optional label. This component builds trust with visual feedback.",
    files: [
      {
        path: "components/star-rating.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "pricing-card",
    type: "registry:component",
    description:
      "A component for Figma that compares plans with layout variants, including a “Most Popular” highlight. This component makes pricing clear and actionable.",
    registryDependencies: ["badge", "button"],
    files: [
      {
        path: "components/pricing-card.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
];
