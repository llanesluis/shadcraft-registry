import { type Registry } from "shadcn/schema";

export const ui: Registry["items"] = [
  {
    name: "chip",
    title: "Chip",
    type: "registry:ui",
    description:
      "A component that combines small text with an icon for quick callouts. This component highlights key values such as benefits, attributes, or job details.",
    files: [
      {
        path: "ui/chip.tsx",
        type: "registry:ui",
        target: "components/shadcraft/chip.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "featured-icon",
    title: "Featured Icon",
    type: "registry:ui",
    description:
      "A component that places an icon inside a styled square or circle frame for extra prominence. This component makes supporting visuals stand out in marketing layouts.",
    files: [
      {
        path: "ui/featured-icon.tsx",
        type: "registry:ui",
        target: "components/shadcraft/featured-icon.tsx",
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
    description: "Pending",
    dependencies: ["@radix-ui/react-slot"],
    files: [
      {
        path: "ui/heading.tsx",
        type: "registry:ui",
        target: "components/shadcraft/heading.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "profile-card",
    title: "Profile Card",
    type: "registry:ui",
    description:
      "An extension of the avatar component with more details on the individual. Good for blog posts etc.",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "ui/profile-card.tsx",
        type: "registry:ui",
        target: "components/shadcraft/profile-card.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "star-rating",
    title: "Star Rating",
    type: "registry:ui",
    description:
      "A component that displays ratings with stars and an optional label. This component builds trust with visual feedback.",
    files: [
      {
        path: "ui/star-rating.tsx",
        type: "registry:ui",
        target: "components/shadcraft/star-rating.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "ui-showcase",
    title: "UI Showcase",
    type: "registry:ui",
    description:
      "A Placeholder that displays content in a device-style frame. This component helps showcase product UI.",
    files: [
      {
        path: "ui/ui-showcase.tsx",
        type: "registry:ui",
        target: "components/shadcraft/ui-showcase.tsx",
      },
    ],
    meta: {
      bundle: "pro-marketing",
    },
  },
];
