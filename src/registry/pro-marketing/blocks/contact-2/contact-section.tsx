import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  SectionHeading,
  SectionHeadingBody,
  SectionHeadingContentType,
  SectionHeadingTitle,
} from "@/registry/pro-marketing/components/section-heading";

export function ContactSection() {
  return (
    <section className="flex flex-col gap-5 px-5 py-12 lg:gap-9 lg:px-20 lg:py-20">
      <SectionHeading alignment="center" className="mx-auto w-full max-w-md">
        <SectionHeadingContentType>Contact us</SectionHeadingContentType>
        <SectionHeadingTitle>Let’s Talk</SectionHeadingTitle>
        <SectionHeadingBody>
          Have questions about Acme AI? Our team is here to help you get the answers you need.
        </SectionHeadingBody>
      </SectionHeading>

      <Card className="mx-auto max-w-md px-5 py-9 lg:p-9">
        <form className="grid grid-cols-2 gap-4">
          <Input placeholder="Placeholder text" />
          <Input placeholder="Placeholder text" />
          <Input placeholder="Placeholder text" className="col-span-2" />
          <Textarea placeholder="Content" className="col-span-2 h-32" />
          <div className="col-span-2 flex items-center gap-2 py-2">
            <Checkbox />
            <span className="text-sm font-normal">
              You agree to our simple{" "}
              <a href="#" className="text-primary underline">
                Privacy Policy
              </a>
            </span>
          </div>
          <Button type="submit" className="col-span-2">
            Send message
          </Button>
        </form>
      </Card>
    </section>
  );
}
