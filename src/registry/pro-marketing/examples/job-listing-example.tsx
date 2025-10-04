import { Button } from "@/components/ui/button";
import { Chip } from "@/registry/pro-marketing/components/chip";
import {
  JobListing,
  JobListingAction,
  JobListingBadge,
  JobListingContent,
  JobListingDescription,
  JobListingFooter,
  JobListingHeader,
  JobListingTitle,
} from "@/registry/pro-marketing/components/job-listing";
import { ArrowUpRightIcon, Coins, MapPin, Timer } from "lucide-react";

export function JobListingExample() {
  return (
    <div className="grid gap-8">
      <div className="flex flex-col gap-8">
        <JobListing>
          <JobListingHeader>
            <JobListingBadge>Design</JobListingBadge>
            <JobListingAction>
              <Button variant="ghost" size="sm">
                View <ArrowUpRightIcon />
              </Button>
            </JobListingAction>
            <JobListingTitle>Creative Director</JobListingTitle>
            <JobListingDescription>
              Shape future brand experiences for our customers.
            </JobListingDescription>
          </JobListingHeader>

          <JobListingFooter>
            <Chip icon={MapPin} label="Remote" />
            <Chip icon={Timer} label="Full-time" />
            <Chip icon={Coins} label="100-120k" />
          </JobListingFooter>
        </JobListing>

        <JobListing>
          <JobListingHeader>
            <JobListingAction>
              <Button variant="ghost" size="sm">
                View <ArrowUpRightIcon />
              </Button>
            </JobListingAction>
            <JobListingTitle>Software Engineer</JobListingTitle>
            <JobListingDescription>
              We are looking for a Software Engineer with 3 years of experience in web development.
            </JobListingDescription>
          </JobListingHeader>

          <JobListingFooter>
            <Chip icon={MapPin} label="Remote" />
            <Chip icon={Timer} label="Full-time" />
            <Chip icon={Coins} label="150-200k" />
          </JobListingFooter>
        </JobListing>

        <JobListing>
          <JobListingHeader>
            <JobListingBadge>Design</JobListingBadge>
            <JobListingTitle>Software Engineer</JobListingTitle>
            <JobListingDescription>
              We are looking for a Software Engineer with 3 years of experience in web development.
            </JobListingDescription>
          </JobListingHeader>

          <JobListingFooter>
            <Chip icon={MapPin} label="Remote" />
            <Chip icon={Timer} label="Full-time" />
            <Chip icon={Coins} label="150-200k" />
          </JobListingFooter>
        </JobListing>

        <JobListing>
          <JobListingHeader>
            <JobListingTitle>Software Engineer</JobListingTitle>
            <JobListingDescription>
              We are looking for a Software Engineer with 3 years of experience in web development.
            </JobListingDescription>
          </JobListingHeader>

          <JobListingContent>
            You can even add some content here to make the job listing more engaging. Explaining the
            job and the company will help candidates understand the role and the company culture.
            The core requirements for the role are listed here. Or any other details that you want
            to add.
          </JobListingContent>

          <JobListingFooter>
            <Chip icon={MapPin} label="Remote" />
            <Chip icon={Timer} label="Full-time" />
            <Chip icon={Coins} label="150-200k" />
          </JobListingFooter>
        </JobListing>
      </div>

      <div className="flex flex-col gap-8">
        <JobListing variant="card">
          <JobListingHeader>
            <JobListingBadge>Design</JobListingBadge>
            <JobListingAction>
              <Button variant="ghost" size="sm">
                View <ArrowUpRightIcon />
              </Button>
            </JobListingAction>
            <JobListingTitle>Creative Director</JobListingTitle>
            <JobListingDescription>
              Shape future brand experiences for our customers.
            </JobListingDescription>
          </JobListingHeader>

          <JobListingFooter>
            <Chip icon={MapPin} label="Remote" />
            <Chip icon={Timer} label="Full-time" />
            <Chip icon={Coins} label="100-120k" />
          </JobListingFooter>
        </JobListing>

        <JobListing variant="card">
          <JobListingHeader>
            <JobListingAction>
              <Button variant="ghost" size="sm">
                View <ArrowUpRightIcon />
              </Button>
            </JobListingAction>
            <JobListingTitle>Software Engineer</JobListingTitle>
            <JobListingDescription>
              We are looking for a Software Engineer with 3 years of experience in web development.
            </JobListingDescription>
          </JobListingHeader>

          <JobListingFooter>
            <Chip icon={MapPin} label="Remote" />
            <Chip icon={Timer} label="Full-time" />
            <Chip icon={Coins} label="150-200k" />
          </JobListingFooter>
        </JobListing>

        <JobListing variant="card">
          <JobListingHeader>
            <JobListingBadge>Design</JobListingBadge>
            <JobListingTitle>Software Engineer</JobListingTitle>
            <JobListingDescription>
              We are looking for a Software Engineer with 3 years of experience in web development.
            </JobListingDescription>
          </JobListingHeader>

          <JobListingFooter>
            <Chip icon={MapPin} label="Remote" />
            <Chip icon={Timer} label="Full-time" />
            <Chip icon={Coins} label="150-200k" />
          </JobListingFooter>
        </JobListing>

        <JobListing variant="card">
          <JobListingHeader>
            <JobListingTitle>Software Engineer</JobListingTitle>
            <JobListingDescription>
              We are looking for a Software Engineer with 3 years of experience in web development.
            </JobListingDescription>
          </JobListingHeader>

          <JobListingContent>
            You can even add some content here to make the job listing more engaging. Explaining the
            job and the company will help candidates understand the role and the company culture.
            The core requirements for the role are listed here. Or any other details that you want
            to add.
          </JobListingContent>

          <JobListingFooter>
            <Chip icon={MapPin} label="Remote" />
            <Chip icon={Timer} label="Full-time" />
            <Chip icon={Coins} label="150-200k" />
          </JobListingFooter>
        </JobListing>
      </div>
    </div>
  );
}
