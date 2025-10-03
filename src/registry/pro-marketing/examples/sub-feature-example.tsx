import { SubFeature } from "@/registry/pro-marketing/components/sub-feature";
import { Activity, Brain, ClipboardClock, Workflow } from "lucide-react";

export function SubFeatureExample() {
  return (
    <div className="flex flex-col gap-8">
      <SubFeature
        title="Smarter Analytics"
        description="Turn data into clarity with AI-powered insights that help you act faster and more confidently."
        icon={Activity}
      />
      <SubFeature
        title="Real-time Monitoring"
        description="Stay ahead with live data streams and instant alerts that keep your business running smoothly."
        icon={ClipboardClock}
        leftBorder
      />

      <SubFeature
        title="AI-Powered Analytics"
        description="Explore data with actionable intelligence crafted by your own AI assistant."
        icon={Brain}
      />
      <SubFeature
        title="Intelligent Automation"
        description="Streamline workflows with smart automation that learns from your patterns and optimizes performance."
        icon={Workflow}
        leftBorder
      />
    </div>
  );
}
