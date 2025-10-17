import { ArrowUpRightIcon, CircleDollarSign, Clock, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
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

export function Careers3() {
  return (
    <section className="grid gap-5 px-5 py-12 lg:gap-10 lg:p-20">
      <SectionHeading alignment="center" className="mx-auto w-full max-w-3xl">
        <SectionHeadingContentType>Careers</SectionHeadingContentType>
        <SectionHeadingTitle>Careers at Acme Inc.</SectionHeadingTitle>
        <SectionHeadingBody>
          We’re a team of curious thinkers and creators shaping how people work smarter with AI. If
          you’re passionate about technology, collaboration, and making an impact, we’d love to hear
          from you.
        </SectionHeadingBody>
      </SectionHeading>

      <div>
        <div className="grid gap-5 md:grid-cols-2 lg:gap-9">
          {/* On mobile show limited items, on md+ show all */}
          {data.slice(0, 4).map((career) => (
            <JobListing key={career.id} variant="card">
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

          {/* Hidden items on mobile, always shown on md+ */}
          {data.slice(4).map((career) => (
            <JobListing key={career.id} variant="card" className={"hidden md:flex"}>
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
        </div>

        <div className="flex flex-col items-center gap-5 py-9">
          {/* Show more button - only visible on mobile when not showing all */}
          <Button variant="ghost" className="w-full sm:w-fit md:hidden">
            Show more
          </Button>
          <Button variant="outline" className="w-full sm:w-fit">
            All jobs <ArrowUpRightIcon />
          </Button>
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
    badge: "Creative Strategist",
    title: "Artistic Visionary",
    description: "Craft unforgettable experiences that captivate our audience.",
    tags: [
      {
        icon: MapPin,
        label: "Flexible",
      },
      {
        icon: Clock,
        label: "Full-time",
      },
      {
        icon: CircleDollarSign,
        label: "90-110k",
      },
    ],
  },
  {
    id: 3,
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
    id: 4,
    badge: "Customer Experience Specialist",
    title: "User Insights Analyst",
    description: "Uncover valuable insights to enhance product quality.",
    tags: [
      {
        icon: MapPin,
        label: "Remote/On-site",
      },
      {
        icon: Clock,
        label: "Freelance",
      },
      {
        icon: CircleDollarSign,
        label: "60-80k",
      },
    ],
  },
  {
    id: 5,
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
    id: 6,
    badge: "Creative Development",
    title: "Digital Experience Designer",
    description: "Transform user experiences with cutting-edge design.",
    tags: [
      {
        icon: MapPin,
        label: "In-office",
      },
      {
        icon: Clock,
        label: "Freelance",
      },
      {
        icon: CircleDollarSign,
        label: "60-75k",
      },
    ],
  },
  {
    id: 7,
    badge: "Design",
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
    id: 8,
    badge: "Creative Direction",
    title: "Innovation Lead",
    description: "Drive product innovation and execution to align with market trends.",
    tags: [
      {
        icon: MapPin,
        label: "Flexible",
      },
      {
        icon: Clock,
        label: "Full-time",
      },
      {
        icon: CircleDollarSign,
        label: "120-150k",
      },
    ],
  },
] as const;
