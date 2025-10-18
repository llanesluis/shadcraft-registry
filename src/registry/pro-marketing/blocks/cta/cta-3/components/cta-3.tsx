import { Button } from "@/components/ui/button";
import {
  SectionHeading,
  SectionHeadingBody,
  SectionHeadingTitle,
} from "@/registry/pro-marketing/components/section-heading";

export function CTA3() {
  return (
    <section className="px-5 py-12 lg:p-20">
      <div className="bg-primary flex flex-col gap-3 rounded-xl px-5 py-12 lg:p-20">
        <SectionHeading alignment="center">
          <SectionHeadingTitle className="text-primary-foreground">
            Ready to Work Smarter with AI?
          </SectionHeadingTitle>
          <SectionHeadingBody className="text-primary-foreground/90">
            Start today and see how Acme Inc. helps you finish projects faster, with clarity and
            focus at every step.
          </SectionHeadingBody>
        </SectionHeading>
        <div className="flex flex-col gap-3 md:flex-row md:justify-center">
          <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Learn More
          </Button>
          <Button className="bg-muted-foreground hover:bg-muted-foreground/90 text-muted cursor-pointer">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
