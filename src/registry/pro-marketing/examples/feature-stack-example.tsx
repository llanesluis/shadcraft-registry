import { Activity, Check, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  FeatureStack,
  FeatureStackAction,
  FeatureStackBody,
  FeatureStackContent,
  FeatureStackHeader,
  FeatureStackIcon,
  FeatureStackTitle,
} from "@/registry/pro-marketing/components/feature-stack";

export function FeatureStackExample() {
  return (
    <div className="flex flex-col gap-16">
      {/* Medium size */}
      <div className="grid gap-16">
        <FeatureStack>
          <FeatureStackIcon icon={<Mail />} variant="featured" />
          <FeatureStackHeader>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We will respond within 2 business days</FeatureStackBody>
          </FeatureStackHeader>
          <FeatureStackAction>
            <span className="text-sm font-medium">email@example.com</span>
          </FeatureStackAction>
        </FeatureStack>

        <FeatureStack>
          <FeatureStackIcon icon={<Mail />} />
          <FeatureStackHeader>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We will respond within 2 business days</FeatureStackBody>
          </FeatureStackHeader>
          <FeatureStackAction>
            <span className="text-sm font-medium">email@example.com</span>
          </FeatureStackAction>
        </FeatureStack>

        <FeatureStack alignment="left">
          <FeatureStackIcon icon={<Mail />} variant="featured" />
          <FeatureStackHeader>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We will respond within 2 business days</FeatureStackBody>
          </FeatureStackHeader>
          <FeatureStackAction>
            <span className="text-sm font-medium">email@example.com</span>
          </FeatureStackAction>
        </FeatureStack>

        <FeatureStack alignment="left">
          <FeatureStackIcon icon={<Mail />} />
          <FeatureStackHeader>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We will respond within 2 business days</FeatureStackBody>
          </FeatureStackHeader>
          <FeatureStackAction>
            <span className="text-sm font-medium">email@example.com</span>
          </FeatureStackAction>
        </FeatureStack>
      </div>

      {/* Small size */}
      <div className="grid gap-16">
        <FeatureStack size="sm">
          <FeatureStackIcon icon={<Mail />} variant="featured" />
          <FeatureStackHeader>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We will respond within 2 business days</FeatureStackBody>
          </FeatureStackHeader>
          <FeatureStackAction>
            <span className="text-sm font-medium">email@example.com</span>
          </FeatureStackAction>
        </FeatureStack>

        <FeatureStack size="sm">
          <FeatureStackIcon icon={<Mail />} />
          <FeatureStackHeader>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We will respond within 2 business days</FeatureStackBody>
          </FeatureStackHeader>
          <FeatureStackAction>
            <span className="text-sm font-medium">email@example.com</span>
          </FeatureStackAction>
        </FeatureStack>

        <FeatureStack alignment="left" size="sm">
          <FeatureStackIcon icon={<Mail />} variant="featured" />
          <FeatureStackHeader>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We will respond within 2 business days</FeatureStackBody>
          </FeatureStackHeader>
          <FeatureStackAction>
            <span className="text-sm font-medium">email@example.com</span>
          </FeatureStackAction>
        </FeatureStack>

        <FeatureStack alignment="left" size="sm">
          <FeatureStackIcon icon={<Mail />} />
          <FeatureStackHeader>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We will respond within 2 business days</FeatureStackBody>
          </FeatureStackHeader>
          <FeatureStackAction>
            <span className="text-sm font-medium">email@example.com</span>
          </FeatureStackAction>
        </FeatureStack>
      </div>

      {/* Examples */}
      <FeatureStack alignment="left">
        <FeatureStackIcon icon={<Activity />} variant="featured" />
        <FeatureStackTitle className="text-3xl">Smarter Analytics</FeatureStackTitle>
        <FeatureStackBody>
          Turn data into clarity with AI-powered insights that help you act faster and more
          confidently.
        </FeatureStackBody>
        <FeatureStackContent className="flex flex-col gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check />
              <p>Feature {index + 1}</p>
            </div>
          ))}
        </FeatureStackContent>
        <FeatureStackAction className="flex gap-2">
          <Button>Learn More</Button>
          <Button variant="outline">Contact Us</Button>
        </FeatureStackAction>
      </FeatureStack>
    </div>
  );
}
