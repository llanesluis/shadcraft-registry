import { Building, Mail, MessagesSquare, Phone } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { LocationDot } from "@/registry/pro-marketing/blocks/contact-5/components/location-dot";
import {
  FeatureStack,
  FeatureStackAction,
  FeatureStackBody,
  FeatureStackHeader,
  FeatureStackIcon,
  FeatureStackTitle,
} from "@/registry/pro-marketing/components/feature-stack";
import {
  SectionHeading,
  SectionHeadingBody,
  SectionHeadingContentType,
  SectionHeadingTitle,
} from "@/registry/pro-marketing/components/section-heading";

export function Contact5() {
  return (
    <section className="flex flex-col gap-5 px-5 py-12 lg:gap-9 lg:px-20 lg:py-20">
      <SectionHeading alignment="center" className="mx-auto w-full max-w-md">
        <SectionHeadingContentType>Contact us</SectionHeadingContentType>
        <SectionHeadingTitle>Let’s Connect</SectionHeadingTitle>
        <SectionHeadingBody>
          Have questions about Acme AI? Our team is here to help you get the answers you need.
        </SectionHeadingBody>
      </SectionHeading>

      <div className="lg:py-9">
        <div className="relative aspect-[21/9] h-auto w-full">
          <div className="size-full overflow-hidden">
            <img src="/assets/map.svg" className="size-full object-cover" alt="World map" />
          </div>

          {officeLocations.map((location) => (
            <div
              key={location.name}
              className="group absolute"
              style={{ top: location.top, left: location.left }}
            >
              <Popover>
                <PopoverTrigger asChild>
                  <LocationDot className="-translate-x-1/2 -translate-y-1/2 cursor-pointer" />
                </PopoverTrigger>
                <PopoverContent className="flex max-w-58 flex-col items-center gap-1.5 text-center">
                  <Building className="size-4" />
                  <span className="text-foreground text-sm leading-6 font-medium">
                    {location.name}
                  </span>
                  <span className="text-muted-foreground text-xs leading-4">
                    {location.address}
                  </span>
                </PopoverContent>
              </Popover>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid gap-12 lg:grid-cols-3 lg:gap-9">
        <FeatureStack size="sm">
          <FeatureStackIcon icon={<Mail />} />
          <FeatureStackHeader>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We’ll respond within 2 business days</FeatureStackBody>
          </FeatureStackHeader>
          <FeatureStackAction>
            <span className="text-sm font-medium">email@example.com</span>
          </FeatureStackAction>
        </FeatureStack>

        <FeatureStack size="sm">
          <FeatureStackIcon icon={<Phone />} />
          <FeatureStackHeader>
            <FeatureStackTitle>Phone</FeatureStackTitle>
            <FeatureStackBody>Available for calls from 9 AM to 5 PM</FeatureStackBody>
          </FeatureStackHeader>
          <FeatureStackAction>
            <span className="text-sm font-medium">(123) 456-7890</span>
          </FeatureStackAction>
        </FeatureStack>

        <FeatureStack size="sm">
          <FeatureStackIcon icon={<MessagesSquare />} />
          <FeatureStackHeader>
            <FeatureStackTitle>Live Chat</FeatureStackTitle>
            <FeatureStackBody>Chat with us for immediate assistance</FeatureStackBody>
          </FeatureStackHeader>
          <FeatureStackAction>
            <span className="text-sm font-medium">www.example.com/chat</span>
          </FeatureStackAction>
        </FeatureStack>
      </div>
    </section>
  );
}

const officeLocations = [
  {
    name: "Sydney Office",
    address: "120 Darling Harbour, NSW 2000",
    top: "82%",
    left: "92%",
  },
  {
    name: "San Francisco Office",
    address: "123 Market Street, CA 94105",
    top: "41%",
    left: "20%",
  },
  {
    name: "São Paulo Office",
    address: "Rua Alegria, 45, SP 01000-000",
    top: "63%",
    left: "33%",
  },
  {
    name: "London Office",
    address: "123 Market Street, CA 94105",
    top: "22%",
    left: "49%",
  },
  {
    name: "Singapore Office",
    address: "101 Marina Bay, 018956",
    top: "58%",
    left: "78%",
  },
];
