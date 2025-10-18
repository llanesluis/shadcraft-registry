import { Button } from "@/components/ui/button";
import {
  SectionHeading,
  SectionHeadingBody,
  SectionHeadingTitle,
} from "@/registry/pro-marketing/components/section-heading";

export function CTA1() {
  return (
    <section className="flex flex-col gap-3 px-5 py-12 lg:p-20">
      <SectionHeading alignment="center">
        <SectionHeadingTitle>Ready to Work Smarter with AI?</SectionHeadingTitle>
        <SectionHeadingBody>
          Start today and see how Acme Inc. helps you finish projects faster, with clarity and focus
          at every step.
        </SectionHeadingBody>
      </SectionHeading>

      <div className="flex flex-col gap-3 md:flex-row md:justify-center">
        <Button className="cursor-pointer">Learn More</Button>
        <Button variant="secondary" className="cursor-pointer">
          Book a Demo
        </Button>
      </div>
    </section>
  );
}
