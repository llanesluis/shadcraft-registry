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
        path: "blocks/banner-1/components/banner-1.tsx",
        type: "registry:component",
      },
    ],
    categories: ["banners"],
    meta: {
      bundle: "pro-marketing",
      containerClassName: "absolute inset-x-0 top-0 p-4",
    },
  },
  {
    name: "banner-2",
    title: "Banner 2",
    type: "registry:block",
    registryDependencies: ["button", getRegistryItemJsonUrl("featured-icon")],
    files: [
      {
        path: "blocks/banner-2/components/banner-2.tsx",
        type: "registry:component",
      },
    ],
    categories: ["banners"],
    meta: {
      bundle: "pro-marketing",
      containerClassName: "absolute inset-x-0 top-0 p-4",
    },
  },
  {
    name: "banner-3",
    title: "Banner 3",
    type: "registry:block",
    registryDependencies: ["button", getRegistryItemJsonUrl("featured-icon")],
    files: [
      {
        path: "blocks/banner-3/components/banner-3.tsx",
        type: "registry:component",
      },
    ],
    categories: ["banners"],
    meta: {
      bundle: "pro-marketing",
      containerClassName: "absolute inset-x-0 top-0 p-4",
    },
  },
  {
    name: "banner-4",
    title: "Banner 4",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/banner-4/components/banner-4.tsx",
        type: "registry:component",
      },
    ],
    categories: ["banners"],
    meta: {
      bundle: "pro-marketing",
      containerClassName: "absolute inset-x-0 top-0 p-4",
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
      {
        path: "blocks/careers-1/components/careers-1.tsx",
        type: "registry:component",
      },
    ],
    categories: ["careers"],
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
      {
        path: "blocks/careers-2/components/careers-2.tsx",
        type: "registry:component",
      },
    ],
    categories: ["careers"],
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
      {
        path: "blocks/careers-3/components/careers-3.tsx",
        type: "registry:component",
      },
    ],
    categories: ["careers"],
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
      {
        path: "blocks/careers-4/components/careers-4.tsx",
        type: "registry:component",
      },
    ],
    categories: ["careers"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "footer-1",
    title: "Footer 1",
    type: "registry:block",
    registryDependencies: ["badge", "separator"],
    files: [
      {
        path: "blocks/footer-1/page.tsx",
        type: "registry:page",
        target: "app/footer/page.tsx",
      },
      {
        path: "blocks/footer-1/components/footer-1.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footers"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "contact-1",
    title: "Contact 1",
    type: "registry:block",
    registryDependencies: [
      "button",
      "input",
      "textarea",
      "checkbox",
      getRegistryItemJsonUrl("section-heading"),
    ],
    files: [
      {
        path: "blocks/contact-1/contact-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "contact-2",
    title: "Contact 2",
    type: "registry:block",
    registryDependencies: [
      "button",
      "input",
      "textarea",
      "checkbox",
      "card",
      getRegistryItemJsonUrl("section-heading"),
    ],
    files: [
      {
        path: "blocks/contact-2/contact-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "contact-3",
    title: "Contact 3",
    type: "registry:block",
    registryDependencies: [
      "button",
      "input",
      "textarea",
      "checkbox",
      getRegistryItemJsonUrl("section-heading"),
    ],
    files: [
      {
        path: "blocks/contact-3/contact-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "contact-4",
    title: "Contact 4",
    type: "registry:block",
    registryDependencies: [
      ...getRegistryItemsJsonUrls("section-heading", "feature-stack", "featured-icon"),
    ],
    files: [
      {
        path: "blocks/contact-4/contact-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "contact-5",
    title: "Contact 5",
    type: "registry:block",
    registryDependencies: [
      "popover",
      ...getRegistryItemsJsonUrls("section-heading", "feature-stack"),
    ],
    files: [
      {
        path: "blocks/contact-5/contact-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "contact-6",
    title: "Contact 6",
    type: "registry:block",
    registryDependencies: [...getRegistryItemsJsonUrls("section-heading", "feature-stack")],
    files: [
      {
        path: "blocks/contact-6/contact-section.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/contact-6/components/map.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "contact-7",
    title: "Contact 7",
    type: "registry:block",
    registryDependencies: [...getRegistryItemsJsonUrls("section-heading", "feature-stack")],
    files: [
      {
        path: "blocks/contact-7/contact-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "contact-8",
    title: "Contact 8",
    type: "registry:block",
    registryDependencies: [...getRegistryItemsJsonUrls("section-heading", "feature-stack")],
    files: [
      {
        path: "blocks/contact-8/contact-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "contact-9",
    title: "Contact 9",
    type: "registry:block",
    registryDependencies: ["button", "avatar", getRegistryItemJsonUrl("section-heading")],
    files: [
      {
        path: "blocks/contact-9/components/contact-9.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
    meta: {
      bundle: "pro-marketing",
      containerClassName: "px-5 py-12 lg:p-20",
    },
  },
  {
    name: "faqs-1",
    title: "FAQs 1",
    type: "registry:block",
    registryDependencies: [
      ...getRegistryItemsJsonUrls("section-heading", "feature-stack", "featured-icon", "contact-9"),
    ],
    files: [
      {
        path: "blocks/faqs-1/page.tsx",
        type: "registry:page",
        target: "app/faqs/page.tsx",
      },
      {
        path: "blocks/faqs-1/components/faqs-1.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faqs"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "faqs-2",
    title: "FAQs 2",
    type: "registry:block",
    registryDependencies: [
      "accordion",
      ...getRegistryItemsJsonUrls("section-heading", "contact-9"),
    ],
    files: [
      {
        path: "blocks/faqs-2/page.tsx",
        type: "registry:page",
        target: "app/faqs/page.tsx",
      },
      {
        path: "blocks/faqs-2/components/faqs-2.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faqs"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "footer-2",
    title: "Footer 2",
    type: "registry:block",
    registryDependencies: ["input", "button", "badge", "separator"],
    files: [
      {
        path: "blocks/footer-2/page.tsx",
        type: "registry:page",
        target: "app/footer/page.tsx",
      },
      {
        path: "blocks/footer-2/components/footer-2.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footers"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "footer-3",
    title: "Footer 3",
    type: "registry:block",
    registryDependencies: ["separator"],
    files: [
      {
        path: "blocks/footer-3/page.tsx",
        type: "registry:page",
        target: "app/footer/page.tsx",
      },
      {
        path: "blocks/footer-3/components/footer-3.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footers"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "metrics-1",
    title: "Metrics 1",
    type: "registry:block",
    registryDependencies: [getRegistryItemJsonUrl("metric")],
    files: [
      {
        path: "blocks/metrics-1/page.tsx",
        type: "registry:page",
        target: "app/metrics/page.tsx",
      },
      {
        path: "blocks/metrics-1/components/metrics-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["metrics"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "metrics-2",
    title: "Metrics 2",
    type: "registry:block",
    registryDependencies: [...getRegistryItemsJsonUrls("section-heading", "metric")],
    files: [
      {
        path: "blocks/metrics-2/page.tsx",
        type: "registry:page",
        target: "app/metrics/page.tsx",
      },
      {
        path: "blocks/metrics-2/components/metrics-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["metrics"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "metrics-3",
    title: "Metrics 3",
    type: "registry:block",
    registryDependencies: [...getRegistryItemsJsonUrls("section-heading", "metric")],
    files: [
      {
        path: "blocks/metrics-3/page.tsx",
        type: "registry:page",
        target: "app/metrics/page.tsx",
      },
      {
        path: "blocks/metrics-3/components/metrics-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["metrics"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "metrics-4",
    title: "Metrics 4",
    type: "registry:block",
    registryDependencies: [...getRegistryItemsJsonUrls("section-heading", "metric")],
    files: [
      {
        path: "blocks/metrics-4/page.tsx",
        type: "registry:page",
        target: "app/metrics/page.tsx",
      },
      {
        path: "blocks/metrics-4/components/metrics-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["metrics"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "metrics-5",
    title: "Metrics 5",
    type: "registry:block",
    registryDependencies: [...getRegistryItemsJsonUrls("section-heading", "metric")],
    files: [
      {
        path: "blocks/metrics-5/page.tsx",
        type: "registry:page",
        target: "app/metrics/page.tsx",
      },
      {
        path: "blocks/metrics-5/components/metrics-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["metrics"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "metrics-6",
    title: "Metrics 6",
    type: "registry:block",
    registryDependencies: [...getRegistryItemsJsonUrls("section-heading", "metric")],
    files: [
      {
        path: "blocks/metrics-6/page.tsx",
        type: "registry:page",
        target: "app/metrics/page.tsx",
      },
      {
        path: "blocks/metrics-6/components/metrics-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["metrics"],
    meta: {
      bundle: "pro-marketing",
    },
  },
  {
    name: "metrics-7",
    title: "Metrics 7",
    type: "registry:block",
    registryDependencies: [...getRegistryItemsJsonUrls("section-heading", "metric")],
    files: [
      {
        path: "blocks/metrics-7/page.tsx",
        type: "registry:page",
        target: "app/metrics/page.tsx",
      },
      {
        path: "blocks/metrics-7/components/metrics-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["metrics"],
    meta: {
      bundle: "pro-marketing",
    },
  },
];
