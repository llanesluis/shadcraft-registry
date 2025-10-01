import { DemoPreview } from "@/components/demo-preview";
import { BlogBlockquoteExample } from "@/registry/pro-marketing/examples/blog-blockquote";
import { ProfileCardExample } from "@/registry/pro-marketing/examples/profile-card-example";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="container mx-auto grid size-full gap-4 px-8 py-12">
        <DemoPreview name="Profile Card">
          <ProfileCardExample />
        </DemoPreview>

        <DemoPreview name="Blog Blockquote">
          <BlogBlockquoteExample />
        </DemoPreview>
      </div>
    </div>
  );
}
