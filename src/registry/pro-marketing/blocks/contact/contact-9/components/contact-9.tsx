import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  SectionHeading,
  SectionHeadingBody,
  SectionHeadingTitle,
} from "@/registry/pro-marketing/components/section-heading";

export function Contact9() {
  return (
    <section className="flex flex-col gap-5 lg:gap-9">
      <div className="bg-background flex flex-col items-center gap-9 rounded-2xl border px-5 py-9 lg:p-9">
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-3 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
          <Avatar className="size-10">
            <AvatarImage src="/assets/avatars/02.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="size-10">
            <AvatarImage src="/assets/avatars/03.png" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar className="size-10">
            <AvatarImage src="/assets/avatars/04.png" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </div>

        <SectionHeading alignment="center" className="mx-auto w-full max-w-xl">
          <SectionHeadingTitle size="xl">Want to know more?</SectionHeadingTitle>
          <SectionHeadingBody>
            Our team is here to help you get the answers you need.
          </SectionHeadingBody>
        </SectionHeading>

        <Button className="max-sm:hidden">Get in touch</Button>
        <Button size="lg" className="hidden w-full max-sm:flex">
          Get in touch
        </Button>
      </div>
    </section>
  );
}
