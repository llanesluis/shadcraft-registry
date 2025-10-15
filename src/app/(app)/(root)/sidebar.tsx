"use client";

import { ChevronDown, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RegistryItem } from "shadcn/schema";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { formatComponentName, groupBlocksByCategories } from "@/utils/registry";

export function RootSidebar({
  items,
  className,
  ...props
}: React.ComponentProps<typeof Sidebar> & { items: RegistryItem[] }) {
  return (
    <Sidebar className={cn("relative border-none", className)} collapsible="icon" {...props}>
      {/* Sidebar Header */}
      <MySidebarContent items={items} className="bg-background p-2" />
      {/* Sidebar Footer */}
      <SidebarRail />
    </Sidebar>
  );
}

function MySidebarContent({
  items,
  className,
  ...props
}: { items: RegistryItem[] } & React.ComponentProps<typeof SidebarContent>) {
  const pathname = usePathname();

  const uiItems = items.filter((item) => item.type === "registry:ui");

  const componentItems = items.filter((item) => item.type === "registry:component");

  const blockItems = items.filter((item) => item.type === "registry:block");
  const blockItemsByCategories = groupBlocksByCategories(blockItems);

  const templateItems = items.filter(
    (item) => item.type === "registry:block" && !!item.meta?.template
  );

  return (
    <SidebarContent className={cn("scrollbar-thin p-2", className)} {...props}>
      {/* UI */}
      <Collapsible className="group/collapsible">
        <SidebarGroup>
          <CollapsibleTrigger className="w-full">
            <SidebarGroupLabel className="flex cursor-pointer items-center justify-between pr-0">
              <span>UI</span>
              <ChevronDown className="size-4 flex-shrink-0 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
            </SidebarGroupLabel>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                {uiItems.length > 0 ? (
                  uiItems.map((item) => {
                    const href = `/ui/${item.name}`;
                    const isActive = pathname === href;
                    return (
                      <SidebarMenuItem
                        key={item.name}
                        className="text-muted-foreground font-medium"
                      >
                        <SidebarMenuButton asChild isActive={isActive} className="line-clamp-1">
                          <Link href={href}>{item.title || formatComponentName(item.name)}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })
                ) : (
                  <span className="text-muted-foreground py-2 text-center text-xs font-medium">
                    No UI components found
                  </span>
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>

      {/* Components */}
      <Collapsible className="group/collapsible">
        <SidebarGroup>
          <CollapsibleTrigger className="w-full">
            <SidebarGroupLabel className="flex cursor-pointer items-center justify-between pr-0">
              <span>Components</span>
              <ChevronDown className="size-4 flex-shrink-0 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
            </SidebarGroupLabel>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                {componentItems.length > 0 ? (
                  componentItems.map((item) => {
                    const href = `/components/${item.name}`;
                    const isActive = pathname === href;
                    return (
                      <SidebarMenuItem
                        key={item.name}
                        className="text-muted-foreground font-medium"
                      >
                        <SidebarMenuButton asChild isActive={isActive} className="line-clamp-1">
                          <Link href={href}>{item.title || formatComponentName(item.name)}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })
                ) : (
                  <span className="text-muted-foreground py-2 text-center text-xs font-medium">
                    No components found
                  </span>
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>

      {/* Blocks */}
      <Collapsible defaultOpen={blockItems.length > 0} className="group/collapsible">
        <SidebarGroup>
          <CollapsibleTrigger className="w-full">
            <SidebarGroupLabel className="flex cursor-pointer items-center justify-between pr-0">
              <span>Blocks</span>
              <ChevronDown className="size-4 flex-shrink-0 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
            </SidebarGroupLabel>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                {blockItemsByCategories.length > 0 ? (
                  blockItemsByCategories.map((item) => {
                    const href = `/blocks/${item.slug}`;
                    const isActive = pathname === href;
                    return (
                      <SidebarMenuItem key={item.slug} className="text-muted-foreground">
                        <SidebarMenuButton asChild isActive={isActive}>
                          <Link
                            href={href}
                            className="flex items-center justify-between gap-2 font-medium"
                          >
                            {item.title}
                            <span className="font-mono text-xs">{item.amount}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })
                ) : (
                  <span className="text-muted-foreground py-2 text-center text-xs font-medium">
                    No blocks found
                  </span>
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>

      {/* Templates */}
      <Collapsible defaultOpen={templateItems.length > 0} className="group/collapsible">
        <SidebarGroup>
          <CollapsibleTrigger className="w-full">
            <SidebarGroupLabel className="flex cursor-pointer items-center justify-between pr-0">
              <div className="flex min-w-0 items-center">
                <LayoutTemplate className="size-4 flex-shrink-0" />
                <span className="ml-2 transition-all duration-200">Templates</span>
              </div>
              <ChevronDown className="size-4 flex-shrink-0 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
            </SidebarGroupLabel>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                {templateItems.length > 0 ? (
                  templateItems.map((item) => {
                    const href = `/templates/${item.name}`;
                    const isActive = pathname === href;
                    return (
                      <SidebarMenuItem
                        key={item.name}
                        className="text-muted-foreground font-medium"
                      >
                        <SidebarMenuButton asChild isActive={isActive}>
                          <Link href={href}>{item.title || formatComponentName(item.name)}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })
                ) : (
                  <span className="text-muted-foreground py-2 text-center text-xs font-medium">
                    No templates found
                  </span>
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
    </SidebarContent>
  );
}
