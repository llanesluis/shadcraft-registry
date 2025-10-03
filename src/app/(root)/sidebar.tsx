"use client";

import { Blocks, ChevronDown, Component, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
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
import { formatComponentName } from "@/utils/registry";

export function RootSidebar({
  items,
  ...props
}: React.ComponentProps<typeof Sidebar> & { items: RegistryItem[] }) {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setActiveHash(window.location.hash);
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleLinkClick = (hash: string) => {
    setActiveHash(hash);
  };

  const componentItems = items.filter((item) => item.type === "registry:component");
  const blockItems = items.filter((item) => item.type === "registry:block");
  const templateItems = items.filter(
    (item) => item.type === "registry:block" && !!item.meta?.template
  );

  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      collapsible="offcanvas"
      {...props}
    >
      <SidebarContent className="scrollbar-thin max-h-[calc(100svh-var(--header-height)-var(--footer-height))]">
        {/* Components */}
        <Collapsible defaultOpen={true} className="group/collapsible">
          <SidebarGroup>
            <CollapsibleTrigger className="w-full">
              <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                <div className="flex min-w-0 items-center">
                  <Component className="size-4 flex-shrink-0" />
                  <span className="ml-2 transition-all duration-200">Components</span>
                </div>
                <ChevronDown className="size-4 flex-shrink-0 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
              </SidebarGroupLabel>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {componentItems.length > 0 ? (
                    componentItems.map((item) => (
                      <SidebarMenuItem key={item.name} className="text-muted-foreground">
                        <SidebarMenuButton asChild isActive={activeHash === `#${item.name}`}>
                          <Link
                            href={`#${item.name}`}
                            onNavigate={() => handleLinkClick(`#${item.name}`)}
                          >
                            {formatComponentName(item.name)}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
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
              <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                <div className="flex min-w-0 items-center">
                  <Blocks className="size-4 flex-shrink-0" />
                  <span className="ml-2 transition-all duration-200">Blocks</span>
                </div>
                <ChevronDown className="size-4 flex-shrink-0 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
              </SidebarGroupLabel>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {blockItems.length > 0 ? (
                    blockItems.map((item) => (
                      <SidebarMenuItem key={item.name} className="text-muted-foreground">
                        <SidebarMenuButton asChild isActive={activeHash === `#${item.name}`}>
                          <Link
                            href={`#${item.name}`}
                            onNavigate={() => handleLinkClick(`#${item.name}`)}
                          >
                            {formatComponentName(item.name)}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
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
              <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
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
                    templateItems.map((item) => (
                      <SidebarMenuItem key={item.name} className="text-muted-foreground">
                        <SidebarMenuButton asChild isActive={activeHash === `#${item.name}`}>
                          <Link
                            href={`#${item.name}`}
                            onNavigate={() => handleLinkClick(`#${item.name}`)}
                          >
                            {formatComponentName(item.name)}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
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
      <SidebarRail />
    </Sidebar>
  );
}
