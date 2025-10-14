import { ArrowUpRightIcon, CircleDollarSign, Clock, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
import { Chip } from "@/registry/pro-marketing/ui/chip";

export function CareersSection() {
  return (
    <section className="grid gap-5 lg:gap-10">
      <SectionHeading alignment="center" className="mx-auto w-full max-w-3xl">
        <SectionHeadingContentType>Careers</SectionHeadingContentType>
        <SectionHeadingTitle>Careers at Acme Inc.</SectionHeadingTitle>
        <SectionHeadingBody>
          We’re a team of curious thinkers and creators shaping how people work smarter with AI. If
          you’re passionate about technology, collaboration, and making an impact, we’d love to hear
          from you.
        </SectionHeadingBody>
      </SectionHeading>

      <div className="grid gap-5 md:grid-cols-2 lg:gap-9">
        <div className="aspect-[5/4] size-full overflow-hidden rounded-2xl md:aspect-auto">
          <img src="/assets/placeholder.svg" alt="Careers" className="size-full object-cover" />
        </div>

        <div>
          <div className="flex flex-col gap-5 lg:gap-9">
            {data.map((career) => (
              <JobListing key={career.id}>
                <JobListingHeader>
                  <JobListingBadge>{career.badge}</JobListingBadge>
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
      </div>
    </section>
  );
}

const data = [
  {
    id: 1,
    badge: "Design",
    title: "Creative Director",
    description: "Shape future brand experiences for our customers.",
    tags: [
      {
        icon: MapPin,
        label: "Remote",
      },
      {
        icon: Clock,
        label: "Full-time",
      },
      {
        icon: CircleDollarSign,
        label: "100-120k",
      },
    ],
  },
  {
    id: 2,
    badge: "User Experience",
    title: "UX Researcher",
    description: "Generate the insights to drive top-quality product experiences.",
    tags: [
      {
        icon: MapPin,
        label: "Hybrid",
      },
      {
        icon: Clock,
        label: "Part-time",
      },
      {
        icon: CircleDollarSign,
        label: "80-100k",
      },
    ],
  },
  {
    id: 3,
    badge: "Design",
    title: "UI/UX Designer",
    description: "Enhance user interactions through innovative design solutions.",
    tags: [
      {
        icon: MapPin,
        label: "On-site",
      },
      {
        icon: Clock,
        label: "Part-time",
      },
      {
        icon: CircleDollarSign,
        label: "70-90k",
      },
    ],
  },
  {
    id: 4,
    badge: "Management",
    title: "Product Manager",
    description: "Lead product strategy and execution to meet market demands.",
    tags: [
      {
        icon: MapPin,
        label: "Hybrid",
      },
      {
        icon: Clock,
        label: "Full-time",
      },
      {
        icon: CircleDollarSign,
        label: "110-140k",
      },
    ],
  },
  {
    id: 5,
    badge: "Design",
    title: "Graphic Designer",
    description: "Create visual content that resonates and engages audiences.",
    tags: [
      {
        icon: MapPin,
        label: "Remote",
      },
      {
        icon: Clock,
        label: "Contract",
      },
      {
        icon: CircleDollarSign,
        label: "50-70k",
      },
    ],
  },
] as const;
