import { Quote } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";
import {
  ProfileCard,
  ProfileCardAvatar,
  ProfileCardBody,
  ProfileCardDetails,
  ProfileCardName,
} from "@/registry/pro-marketing/components/profile-card";

function BlogBlockquote({
  showIcons = true,
  className,
  containerClassName,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showIcons?: boolean;
  containerClassName?: string;
}) {
  return (
    <div
      data-slot="blog-blockquote"
      data-show-icons={showIcons}
      className={cn("group/blog-blockquote my-5 max-w-3xl lg:my-9", containerClassName)}
      {...props}
    >
      <blockquote className={cn("flex flex-col gap-1.5 border-l-[3px] pl-5 lg:pl-9", className)}>
        {children}
      </blockquote>
    </div>
  );
}

function BlogBlockquoteText({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <>
      <Quote className="text-muted-foreground size-4 self-start group-not-data-[show-icons=true]/blog-blockquote:hidden" />
      <p
        className={cn(
          "text-muted-foreground font-sans text-2xl leading-9 font-normal tracking-[-0.6px] text-pretty lg:text-3xl lg:leading-10 lg:tracking-[-0.75px]",
          className
        )}
        {...props}
      />
      <Quote className="text-muted-foreground size-4 self-end group-not-data-[show-icons=true]/blog-blockquote:hidden" />
    </>
  );
}

function BlogBlockquoteAuthor({
  name,
  imageUrl = "",
  date,
}: {
  name: string;
  imageUrl?: string;
  date?: string;
}) {
  return (
    <ProfileCard>
      <ProfileCardAvatar src={imageUrl} name={name} />
      <ProfileCardDetails>
        <ProfileCardName>{name}</ProfileCardName>
        {date && <ProfileCardBody>{date}</ProfileCardBody>}
      </ProfileCardDetails>
    </ProfileCard>
  );
}

export { BlogBlockquote, BlogBlockquoteAuthor, BlogBlockquoteText };
