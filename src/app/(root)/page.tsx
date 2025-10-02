import { BlockDisplay } from "@/components/block-display";
import { getRegistryItem } from "@/lib/registry";
import React from "react";

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name);
});

export default async function HomePage() {
  const profileCard = await getCachedRegistryItem("profile-card");
  const blogBlockquote = await getCachedRegistryItem("blog-blockquote");

  return (
    <div className="flex flex-col gap-12">
      <div className="container mx-auto grid size-full gap-16 px-8 py-12">
        {profileCard && <BlockDisplay name={profileCard.name} />}
        {blogBlockquote && <BlockDisplay name={blogBlockquote.name} />}
      </div>
    </div>
  );
}
