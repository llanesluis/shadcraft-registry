import { ArrowUpRightIcon, Coins, MapPin, Timer } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Chip } from "@/registry/pro-marketing/components/chip";
import {
  JobListing,
  JobListingAction,
  JobListingBadge,
  JobListingDescription,
  JobListingFooter,
  JobListingHeader,
  JobListingTitle,
} from "@/registry/pro-marketing/components/job-listing";
import {
  SectionHeading,
  SectionHeadingBody,
  SectionHeadingContentType,
  SectionHeadingTitle,
} from "@/registry/pro-marketing/components/section-heading";

export default function Page() {
  return (
    <section className="mx-auto max-w-screen-md space-y-5 md:space-y-10">
      <SectionHeading alignment="center">
        <SectionHeadingContentType>Careers</SectionHeadingContentType>
        <SectionHeadingTitle>Careers at Acme Inc.</SectionHeadingTitle>
        <SectionHeadingBody>
          We’re a team of curious thinkers and creators shaping how people work smarter with AI. If
          you’re passionate about technology, collaboration, and making an impact, we’d love to hear
          from you.
        </SectionHeadingBody>
      </SectionHeading>

      <div>
        <div className="flex flex-col gap-5 md:gap-2">
          {careersData.map((career) => (
            <JobListing key={career.id}>
              <JobListingHeader>
                <JobListingBadge>{career.category}</JobListingBadge>
                <JobListingAction>
                  <Button variant="ghost" size="sm" className="cursor-pointer">
                    View <ArrowUpRightIcon />
                  </Button>
                </JobListingAction>
                <JobListingTitle>{career.title}</JobListingTitle>
                <JobListingDescription>{career.description}</JobListingDescription>
              </JobListingHeader>

              <JobListingFooter>
                {career.tags.map((tag) => (
                  <Chip key={tag.label} icon={<tag.icon />} label={tag.label} />
                ))}
              </JobListingFooter>
            </JobListing>
          ))}
          <Separator />
        </div>

        <div className="pt-9">
          <Button variant="outline" className="w-full sm:w-fit">
            All jobs <ArrowUpRightIcon />
          </Button>
        </div>
      </div>
    </section>
  );
}

const careersData = [
  {
    id: 1,
    category: "Design",
    title: "Creative Director",
    description: "Shape future brand experiences for our customers.",
    tags: [
      {
        icon: MapPin,
        label: "Remote",
      },
      {
        icon: Timer,
        label: "Full-time",
      },
      {
        icon: Coins,
        label: "100-120k",
      },
    ],
  },
  {
    id: 2,
    category: "Engineering",
    title: "Senior Frontend Developer",
    description: "Build beautiful and performant user interfaces with modern web technologies.",
    tags: [
      {
        icon: MapPin,
        label: "San Francisco",
      },
      {
        icon: Timer,
        label: "Full-time",
      },
      {
        icon: Coins,
        label: "130-150k",
      },
    ],
  },
  {
    id: 3,
    category: "Product",
    title: "Product Manager",
    description: "Drive product strategy and work with cross-functional teams to deliver impact.",
    tags: [
      {
        icon: MapPin,
        label: "New York",
      },
      {
        icon: Timer,
        label: "Full-time",
      },
      {
        icon: Coins,
        label: "140-160k",
      },
    ],
  },
  {
    id: 4,
    category: "Marketing",
    title: "Content Marketing Specialist",
    description: "Create compelling content that engages our audience and drives growth.",
    tags: [
      {
        icon: MapPin,
        label: "Remote",
      },
      {
        icon: Timer,
        label: "Part-time",
      },
      {
        icon: Coins,
        label: "60-80k",
      },
    ],
  },
  {
    id: 5,
    category: "Engineering",
    title: "DevOps Engineer",
    description: "Scale our infrastructure and improve developer experience across the platform.",
    tags: [
      {
        icon: MapPin,
        label: "Austin",
      },
      {
        icon: Timer,
        label: "Full-time",
      },
      {
        icon: Coins,
        label: "120-140k",
      },
    ],
  },
] as const;
