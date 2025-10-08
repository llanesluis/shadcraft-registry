import { Button } from "@/components/ui/button";
import {
  FeatureStack,
  FeatureStackAction,
  FeatureStackBody,
  FeatureStackContent,
  FeatureStackIcon,
  FeatureStackTitle,
} from "@/registry/pro-marketing/components/feature-stack";
import { Mail } from "lucide-react";

export function FeatureStackExample() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-8">
        <FeatureStack>
          <FeatureStackIcon icon={<Mail />} variant="featured" />
          <FeatureStackContent>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We will respond within 2 business days</FeatureStackBody>
            <FeatureStackAction>
              <Button variant="link" className="px-0!">
                email@example.com
              </Button>
            </FeatureStackAction>
          </FeatureStackContent>
        </FeatureStack>

        <FeatureStack>
          <FeatureStackIcon icon={<Mail />} />
          <FeatureStackContent>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We will respond within 2 business days</FeatureStackBody>
            <FeatureStackAction>
              <Button variant="link" className="px-0!">
                email@example.com
              </Button>
            </FeatureStackAction>
          </FeatureStackContent>
        </FeatureStack>

        <FeatureStack alignment="left">
          <FeatureStackIcon icon={<Mail />} variant="featured" />
          <FeatureStackContent>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We will respond within 2 business days</FeatureStackBody>
            <FeatureStackAction>
              <Button variant="link" className="px-0!">
                email@example.com
              </Button>
            </FeatureStackAction>
          </FeatureStackContent>
        </FeatureStack>

        <FeatureStack alignment="left">
          <FeatureStackIcon icon={<Mail />} />
          <FeatureStackContent>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We will respond within 2 business days</FeatureStackBody>
            <FeatureStackAction>
              <Button variant="link" className="px-0!">
                email@example.com
              </Button>
            </FeatureStackAction>
          </FeatureStackContent>
        </FeatureStack>
      </div>

      <div className="grid w-full gap-8">
        <FeatureStack variant="card" alignment="left">
          <FeatureStackIcon icon={<Mail />} variant="featured" />
          <FeatureStackContent>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We will respond within 2 business days</FeatureStackBody>
            <FeatureStackAction>
              <Button variant="link" className="px-0!">
                email@example.com
              </Button>
            </FeatureStackAction>
          </FeatureStackContent>
        </FeatureStack>

        <FeatureStack variant="card" alignment="left">
          <FeatureStackIcon icon={<Mail />} />
          <FeatureStackContent>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We will respond within 2 business days</FeatureStackBody>
            <FeatureStackAction>
              <Button variant="link" className="px-0!">
                email@example.com
              </Button>
            </FeatureStackAction>
          </FeatureStackContent>
        </FeatureStack>

        <FeatureStack variant="card" alignment="center">
          <FeatureStackIcon icon={<Mail />} variant="featured" />
          <FeatureStackContent>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We will respond within 2 business days</FeatureStackBody>
            <FeatureStackAction>
              <Button variant="link" className="px-0!">
                email@example.com
              </Button>
            </FeatureStackAction>
          </FeatureStackContent>
        </FeatureStack>

        <FeatureStack variant="card" alignment="center">
          <FeatureStackIcon icon={<Mail />} />
          <FeatureStackContent>
            <FeatureStackTitle>Email</FeatureStackTitle>
            <FeatureStackBody>We will respond within 2 business days</FeatureStackBody>
            <FeatureStackAction>
              <Button variant="link" className="px-0!">
                email@example.com
              </Button>
            </FeatureStackAction>
          </FeatureStackContent>
        </FeatureStack>
      </div>
    </div>
  );
}
