import {
  PricingCard,
  PricingCardAmount,
  PricingCardBadge,
  PricingCardCadence,
  PricingCardContent,
  PricingCardCTAButton,
  PricingCardDescription,
  PricingCardFeatures,
  PricingCardFinePrint,
  PricingCardHeader,
  PricingCardIcon,
  PricingCardListItem,
  PricingCardPricing,
  PricingCardTitle,
} from "@/registry/pro-marketing/components/pricing-card";
import { Building, Gem, Star } from "lucide-react";

export function PricingCardExample() {
  return (
    <div className="grid size-full place-items-center gap-8 lg:grid-cols-3">
      <PricingCard>
        <PricingCardIcon icon={Star} />
        <PricingCardHeader>
          <PricingCardTitle>Starter Plan</PricingCardTitle>
          <PricingCardDescription>
            For individuals who want AI assistance in their daily workflow.
          </PricingCardDescription>
        </PricingCardHeader>

        <PricingCardPricing>
          <PricingCardAmount>$10</PricingCardAmount>
          <PricingCardCadence>Per month</PricingCardCadence>
          <PricingCardFinePrint>Plus local taxes</PricingCardFinePrint>
        </PricingCardPricing>

        <PricingCardCTAButton>Get started</PricingCardCTAButton>

        <PricingCardFeatures>
          <PricingCardListItem>Unlimited projects</PricingCardListItem>
          <PricingCardListItem>AI-powered insights </PricingCardListItem>
          <PricingCardListItem>Real-time collaboration</PricingCardListItem>
          <PricingCardListItem>Seamless integrations</PricingCardListItem>
          <PricingCardListItem>Priority support</PricingCardListItem>
        </PricingCardFeatures>
      </PricingCard>

      <PricingCard mostPopular>
        <PricingCardIcon icon={Gem} />
        <PricingCardHeader>
          <PricingCardBadge>Most Popular</PricingCardBadge>
          <PricingCardTitle>Pro Plan</PricingCardTitle>
          <PricingCardDescription>
            For individuals who want AI assistance in their daily workflow.
          </PricingCardDescription>
        </PricingCardHeader>

        <PricingCardPricing>
          <PricingCardAmount>$20</PricingCardAmount>
          <PricingCardCadence>Per month</PricingCardCadence>
          <PricingCardFinePrint>Plus local taxes</PricingCardFinePrint>
        </PricingCardPricing>

        <PricingCardCTAButton>Get started</PricingCardCTAButton>

        <PricingCardContent>
          <span className="text-muted-foreground font-sans text-sm leading-5 font-medium">
            All features in Starter Plan, plus:
          </span>
          <PricingCardFeatures>
            <PricingCardListItem>Unlimited projects</PricingCardListItem>
            <PricingCardListItem>AI-powered insights </PricingCardListItem>
            <PricingCardListItem>Real-time collaboration</PricingCardListItem>
            <PricingCardListItem>Seamless integrations</PricingCardListItem>
          </PricingCardFeatures>
        </PricingCardContent>
      </PricingCard>

      <PricingCard>
        <PricingCardIcon icon={Building} />
        <PricingCardHeader>
          <PricingCardTitle>Enterprise Plan</PricingCardTitle>
          <PricingCardDescription>
            For individuals who want AI assistance in their daily workflow.
          </PricingCardDescription>
        </PricingCardHeader>

        <PricingCardPricing>
          <PricingCardAmount>$50</PricingCardAmount>
          <PricingCardCadence>Per month</PricingCardCadence>
          <PricingCardFinePrint>Plus local taxes</PricingCardFinePrint>
        </PricingCardPricing>

        <PricingCardCTAButton>Get started</PricingCardCTAButton>

        <PricingCardContent>
          <span className="text-muted-foreground font-sans text-sm leading-5 font-medium">
            All features in Pro Plan, plus:
          </span>

          <PricingCardFeatures>
            <PricingCardListItem>Unlimited projects</PricingCardListItem>
            <PricingCardListItem>AI-powered insights </PricingCardListItem>
            <PricingCardListItem>Real-time collaboration</PricingCardListItem>
            <PricingCardListItem>Seamless integrations</PricingCardListItem>
          </PricingCardFeatures>
        </PricingCardContent>
      </PricingCard>
    </div>
  );
}
