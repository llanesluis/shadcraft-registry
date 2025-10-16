import { Button } from "@/components/ui/button";
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
      <div className="grid items-center gap-5 md:grid-cols-[auto_1fr] lg:gap-9">
        <div className="flex flex-col gap-5 md:max-w-lg lg:gap-9">
          <SectionHeading>
            <SectionHeadingContentType>Contact us</SectionHeadingContentType>
            <SectionHeadingTitle>Let’s Talk</SectionHeadingTitle>
            <SectionHeadingBody>
              Have questions about Acme AI? Our team is here to help you get the answers you need.
            </SectionHeadingBody>
          </SectionHeading>

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
        </div>

        <div className="aspect-square size-full overflow-hidden rounded-2xl md:aspect-[4/5]">
          <img src="/assets/contact-3.jpg" className="size-full object-cover" />
        </div>
      </div>
    </section>
  );
}
