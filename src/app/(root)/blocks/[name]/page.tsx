import { notFound } from "next/navigation";
import React from "react";

import { DemoDisplay } from "@/components/demo-display";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { getBlockItems, getRegistryItem } from "@/lib/registry";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name);
});

export const generateStaticParams = async () => {
  return getBlockItems().map((item) => ({ name: item.name }));
};

export default async function Page({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const item = await getCachedRegistryItem(name);

  if (!item) {
    return notFound();
  }

  return (
    <main className="space-y-10">
      <PageHeader>
        <span className="code-inline w-fit font-mono font-medium">{item.type}</span>
        <PageHeaderHeading>{item.title}</PageHeaderHeading>
        {item.description && <PageHeaderDescription>{item.description}</PageHeaderDescription>}
      </PageHeader>

      <DemoDisplay key={item.name} name={item.name} showHeader={false} />
    </main>
  );
}
