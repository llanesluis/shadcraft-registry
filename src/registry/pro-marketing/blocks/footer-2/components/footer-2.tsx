import { Circle, Facebook, Linkedin, Mail } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer2() {
  return (
    <footer className="bg-background flex w-full flex-col gap-12 pt-12 md:gap-9 lg:pt-20">
      <div className="container mx-auto flex flex-col gap-5 px-5 md:flex-row md:gap-9 lg:px-20">
        <div className="flex flex-1 flex-col gap-3">
          <h2 className="text-4xl font-semibold tracking-[-2.5%]">Stay in the loop</h2>
          <p className="text-muted-foreground text-base leading-6 font-normal">
            Get insights, product updates, and productivity tips straight to your inbox.{" "}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 md:self-end-safe">
          <form className="flex flex-col gap-2 sm:flex-row">
            <Input placeholder="Enter your email" className="bg-background" />
            <Button type="submit">
              <Mail /> Subscribe
            </Button>
          </form>
          <span className="text-muted-foreground text-sm leading-5 font-normal md:hidden">
            We respect your privacy
          </span>
        </div>
      </div>

      <Separator />

      <div className="container mx-auto grid gap-12 px-5 sm:grid-cols-2 md:gap-9 lg:grid-cols-4 lg:px-20">
        {data.map((section) => (
          <div key={section.title} className="flex flex-col gap-2.5">
            <h3 className="text-muted-foreground text-sm leading-5 font-medium">{section.title}</h3>
            <ul className="flex flex-col gap-3">
              {section.links.map((link) => (
                <li key={link.label} className="text-base leading-6 font-normal">
                  <a href={link.href} className="flex items-center gap-1">
                    {link.label}
                    {link.badge && <Badge variant="outline">{link.badge}</Badge>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-muted py-9">
        <div className="container mx-auto flex flex-col gap-9 px-5 md:flex-row md:items-center md:justify-between lg:px-20">
          <div className="flex items-center gap-1">
            <Circle className="size-6" />
            <span className="text-sm font-semibold">Acme Inc.</span>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-3 md:gap-4">
              <Linkedin className="size-4" />
              <Facebook className="size-4" />
            </div>
            <p className="text-muted-foreground text-sm font-normal">
              &copy; Copyright Acme Inc. 2025. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const data = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Integrations", href: "#", badge: "New" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security", href: "#" },
      { label: "Cookie Settings", href: "#" },
    ],
  },
];
