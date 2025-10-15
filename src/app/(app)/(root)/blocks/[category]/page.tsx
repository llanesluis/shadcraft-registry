import { notFound } from "next/navigation";

import { DemoDisplay } from "@/components/demo-display";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { getBlocksByCategories } from "@/lib/registry";
import { registryCategories } from "@/registry/registry-categories";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export const generateStaticParams = async () => {
  return registryCategories.map((category) => ({ name: category.slug }));
};

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const blocks = getBlocksByCategories([category]);
  const categoryData = registryCategories.find((c) => c.slug === category);

  if (!categoryData) {
    return notFound();
  }

  return (
    <main className="space-y-10">
      <PageHeader>
        <span className="code-inline w-fit font-mono font-medium">registry:block</span>
        <PageHeaderHeading>{categoryData.title}</PageHeaderHeading>
        {categoryData.description && (
          <PageHeaderDescription>{categoryData.description}</PageHeaderDescription>
        )}
      </PageHeader>

      {blocks.map((block) => (
        <DemoDisplay key={block.name} name={block.name} />
      ))}
    </main>
  );
}
