import { Circle, Facebook, Linkedin } from "lucide-react";

import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-background flex w-full flex-col gap-12 py-20 md:gap-9">
      <Separator />

      <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-9 lg:grid-cols-4">
        {data.map((section) => (
          <div key={section.title} className="flex flex-col gap-2.5">
            <h3 className="text-muted-foreground text-sm leading-5 font-medium">{section.title}</h3>
            <ul className="flex flex-col gap-3">
              {section.links.map((link) => (
                <li key={link.label} className="text-base leading-6 font-normal">
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="max-lg:col-span-full lg:order-first">
          <div className="flex flex-col gap-9 sm:max-lg:flex-row sm:max-lg:items-center sm:max-lg:justify-between">
            <div className="flex items-center gap-1">
              <Circle className="size-6" />
              <span className="text-sm font-semibold">Acme Inc.</span>
            </div>
            <div className="flex flex-col gap-4 sm:max-lg:flex-row sm:max-lg:items-center">
              <div className="flex items-center gap-3 sm:max-lg:gap-4">
                <Linkedin className="size-4" />
                <Facebook className="size-4" />
              </div>
              <p className="text-muted-foreground text-sm font-normal">
                &copy; Copyright Acme Inc. 2025. All right reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const data = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Community", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Events", href: "#" },
      { label: "Tutorials", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security", href: "#" },
      { label: "Cookie Settings", href: "#" },
      { label: "Data Processing Agreement", href: "#" },
      { label: "Compliance", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  },
];
