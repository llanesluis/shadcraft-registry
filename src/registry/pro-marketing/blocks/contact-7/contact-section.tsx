import { Mail, MessagesSquare, Phone } from "lucide-react";

import {
  FeatureStack,
  FeatureStackAction,
  FeatureStackBody,
  FeatureStackHeader,
  FeatureStackTitle,
} from "@/registry/pro-marketing/components/feature-stack";
import {
  SectionHeading,
  SectionHeadingBody,
  SectionHeadingContentType,
  SectionHeadingTitle,
} from "@/registry/pro-marketing/components/section-heading";
import { FeaturedIcon } from "@/registry/pro-marketing/ui/featured-icon";

export function ContactSection() {
  return (
    <section className="flex flex-col gap-5 px-5 py-12 lg:gap-9 lg:px-20 lg:py-20">
      <SectionHeading alignment="center" className="mx-auto w-full max-w-md">
        <SectionHeadingContentType>Contact us</SectionHeadingContentType>
        <SectionHeadingTitle>Let’s Connect</SectionHeadingTitle>
        <SectionHeadingBody>
          Have questions about Acme AI? Our team is here to help you get the answers you need.
        </SectionHeadingBody>
      </SectionHeading>

      <div className="bg-muted aspect-square overflow-hidden rounded-2xl sm:aspect-[21/10]">
        <img src="/assets/contact-7.jpg" className="size-full object-cover" />
      </div>

      <div className="mx-auto grid gap-12 lg:grid-cols-3 lg:gap-9">
        <FeatureStack size="sm">
          <FeaturedIcon variant="square" size="md">
            <Mail />
          </FeaturedIcon>
          <FeatureStackHeader>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We’ll respond within 2 business days</FeatureStackBody>
          </FeatureStackHeader>
          <FeatureStackAction>
            <span className="text-sm font-medium">email@example.com</span>
          </FeatureStackAction>
        </FeatureStack>

        <FeatureStack size="sm">
          <FeaturedIcon variant="square" size="md">
            <Phone />
          </FeaturedIcon>
          <FeatureStackHeader>
            <FeatureStackTitle>Phone</FeatureStackTitle>
            <FeatureStackBody>Available for calls from 9 AM to 5 PM</FeatureStackBody>
          </FeatureStackHeader>
          <FeatureStackAction>
            <span className="text-sm font-medium">(123) 456-7890</span>
          </FeatureStackAction>
        </FeatureStack>

        <FeatureStack size="sm">
          <FeaturedIcon variant="square" size="md">
            <MessagesSquare />
          </FeaturedIcon>
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
