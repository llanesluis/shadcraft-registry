import { DemoPreview } from "@/components/demo-preview";
import { ProfileCardExample } from "@/registry/pro-marketing/examples/profile-card-example";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-12 p-8">
      <DemoPreview name="Profile Card">
        <ProfileCardExample />
      </DemoPreview>
    </div>
  );
}
