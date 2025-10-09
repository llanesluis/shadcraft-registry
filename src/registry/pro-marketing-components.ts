import { Registry } from "shadcn/schema";

import { getRegistryItemJsonUrl } from "@/utils/registry";

export const proMarketingComponents: Registry["items"] = [
  {
    name: "profile-card",
    title: "Profile Card",
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
    title: "Blog Blockquote",
    type: "registry:component",
    description: "TBC",
    registryDependencies: [getRegistryItemJsonUrl("profile-card")],
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
    title: "Chip",
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
    title: "Sub Feature",
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
    title: "Featured Icon",
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
    title: "UI Showcase",
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
    title: "Job Listing",
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
    title: "Star Rating",
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
    title: "Pricing Card",
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
  {
    name: "blog-image",
    title: "Blog Image",
    type: "registry:component",
    description:
      "A component that displays an inline or full-width image with an optional caption. This component makes blog articles more engaging and visually appealing.",
    files: [
      {
        path: "components/blog-image.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "metric",
    title: "Metric",
    type: "registry:component",
    description:
      "A component that displays large stats with a sub-label for context. This component is designed to highlight performance or usage data.",
    registryDependencies: ["button"],
    files: [
      {
        path: "components/metric.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "feature-stack",
    title: "Feature Stack",
    type: "registry:component",
    description:
      "A component that arranges an icon, header, body text, and CTA in different layout styles. This component makes features clear and actionable.",
    registryDependencies: [getRegistryItemJsonUrl("featured-icon")],
    files: [
      {
        path: "components/feature-stack.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "heading",
    title: "Heading",
    type: "registry:ui",
    description: "A component that displays a heading.",
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
