import { CircleDollarSign, CodeXml, HandPlatter, Lock, Sparkles, User } from "lucide-react";

import { Contact9 } from "@/registry/pro-marketing/blocks/contact/contact-9/components/contact-9";
import {
  FeatureStack,
  FeatureStackBody,
  FeatureStackHeader,
  FeatureStackTitle,
} from "@/registry/pro-marketing/components/feature-stack";
import {
  SectionHeading,
  SectionHeadingContentType,
  SectionHeadingTitle,
} from "@/registry/pro-marketing/components/section-heading";
import { FeaturedIcon } from "@/registry/pro-marketing/ui/featured-icon";

export function Faqs1() {
  return (
    <section className="flex flex-col gap-12 px-5 py-12 lg:gap-9 lg:p-20">
      <SectionHeading>
        <SectionHeadingContentType>Support</SectionHeadingContentType>
        <SectionHeadingTitle>Frequently Asked Questions</SectionHeadingTitle>
      </SectionHeading>

      <div className="grid gap-y-12 md:grid-cols-2 md:gap-9 lg:grid-cols-3">
        {faqs.map((faq) => (
          <FeatureStack alignment="left" size="sm" key={faq.title}>
            <FeaturedIcon variant="square" size="md">
              {faq.icon}
            </FeaturedIcon>
            <FeatureStackHeader>
              <FeatureStackTitle>{faq.title}</FeatureStackTitle>
              <FeatureStackBody>{faq.description}</FeatureStackBody>
            </FeatureStackHeader>
          </FeatureStack>
        ))}
      </div>

      <Contact9 />
    </section>
  );
}

const faqs = [
  {
    icon: <Sparkles />,
    title: "What is Acme AI?",
    description:
      "Acme AI is a personal AI workspace that helps individuals and teams cut context switching, gain clarity, and complete projects faster.",
  },
  {
    icon: <User />,
    title: "Who is Acme AI for?",
    description:
      "It's built for creators, teams, and businesses of all sizes who want to streamline their workflow and make smarter decisions.",
  },
  {
    icon: <CircleDollarSign />,
    title: "How much does it cost?",
    description:
      "We offer flexible one-time plans starting at 199 USD. See our pricing section for details.",
  },
  {
    icon: <CodeXml />,
    title: "Do I need technical skills to use Acme AI?",
    description:
      "Not at all. Acme AI is designed to work out of the box with minimal setup, and integrates with the tools you already use.",
  },
  {
    icon: <HandPlatter />,
    title: "Can I try it before I buy?",
    description: "Yes — we offer a demo so you can see how Acme AI fits into your workflow.",
  },
  {
    icon: <Lock />,
    title: "How does Acme AI handle my data?",
    description:
      "Your privacy and security are our top priority. All data is encrypted and never shared with third parties.",
  },
];
