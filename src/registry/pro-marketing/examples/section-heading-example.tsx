import {
  SectionHeading,
  SectionHeadingBody,
  SectionHeadingContentType,
  SectionHeadingTitle,
} from "@/registry/pro-marketing/components/section-heading";

export function SectionHeadingExample() {
  return (
    <div className="flex w-full flex-col gap-16 px-4 py-8 lg:px-8">
      <SectionHeading>
        <SectionHeadingContentType>Pricing</SectionHeadingContentType>
        <SectionHeadingTitle>Simple Pricing, Smarter Work</SectionHeadingTitle>
        <SectionHeadingBody>
          Acme Inc. has a plan designed to help you move faster.
        </SectionHeadingBody>
      </SectionHeading>

      <SectionHeading alignment="center">
        <SectionHeadingContentType>Pricing</SectionHeadingContentType>
        <SectionHeadingTitle>Simple Pricing, Smarter Work</SectionHeadingTitle>
        <SectionHeadingBody>
          Acme Inc. has a plan designed to help you move faster.
        </SectionHeadingBody>
      </SectionHeading>

      <SectionHeading alignment="right">
        <SectionHeadingContentType>Pricing</SectionHeadingContentType>
        <SectionHeadingTitle>Simple Pricing, Smarter Work</SectionHeadingTitle>
        <SectionHeadingBody>
          Acme Inc. has a plan designed to help you move faster.
        </SectionHeadingBody>
      </SectionHeading>
    </div>
  );
}
