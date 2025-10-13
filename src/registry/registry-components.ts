import { type Registry } from "shadcn/schema";

import { getRegistryItemJsonUrl } from "@/utils/registry";

export const components: Registry["items"] = [
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
        target: "components/shadcraft/blog-blockquote.tsx",
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
        target: "components/shadcraft/blog-image.tsx",
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
        target: "components/shadcraft/feature-stack.tsx",
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
        target: "components/shadcraft/job-listing.tsx",
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
        target: "components/shadcraft/metric.tsx",
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
        target: "components/shadcraft/pricing-card.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "section-heading",
    title: "Section Heading",
    type: "registry:component",
    description:
      "A component that standardises heading typography and spacing. This component includes a pre-heading label, main heading, and body text in different layout variants.",
    registryDependencies: [getRegistryItemJsonUrl("heading")],
    files: [
      {
        path: "components/section-heading.tsx",
        type: "registry:component",
        target: "components/shadcraft/section-heading.tsx",
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
        target: "components/shadcraft/sub-feature.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
];
