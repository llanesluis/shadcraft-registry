import {
  ProfileCard,
  ProfileCardAvatar,
  ProfileCardBody,
  ProfileCardDetails,
  ProfileCardFallback,
  ProfileCardImage,
  ProfileCardName,
} from "@/registry/pro-marketing/components/profile-card";
import { Quote } from "lucide-react";

type BlogBlockquoteProps =
  | {
      quote: string;
      authorName: string;
      authorImageUrl?: string;
      date: string;
      showQuoteIcons?: boolean;
      showAuthor?: true;
    }
  | {
      quote: string;
      authorName?: string;
      authorImageUrl?: string;
      date?: string;
      showQuoteIcons?: boolean;
      showAuthor: false;
    };

export function BlogBlockquote({
  quote,
  authorName,
  authorImageUrl,
  date,
  showQuoteIcons = true,
  showAuthor = true,
}: BlogBlockquoteProps) {
  return (
    <div className="my-5 lg:my-9">
      <blockquote className="grid max-w-3xl gap-1.5 border-l-[3px] pl-5 lg:pl-9">
        {showQuoteIcons && <Quote className="text-muted-foreground size-4" />}
        <p className="text-muted-foreground font-sans text-2xl leading-9 font-normal tracking-[-0.6px] text-pretty lg:text-3xl lg:leading-10 lg:tracking-[-0.75px]">
          {quote}
        </p>
        {showQuoteIcons && <Quote className="text-muted-foreground size-4 justify-self-end" />}

        {showAuthor && authorName && date && (
          <ProfileCard>
            <ProfileCardAvatar>
              <ProfileCardImage src={authorImageUrl} />
              <ProfileCardFallback>{authorName.charAt(0)}</ProfileCardFallback>
            </ProfileCardAvatar>
            <ProfileCardDetails>
              <ProfileCardName>{authorName}</ProfileCardName>
              <ProfileCardBody>{date}</ProfileCardBody>
            </ProfileCardDetails>
          </ProfileCard>
        )}
      </blockquote>
    </div>
  );
}
