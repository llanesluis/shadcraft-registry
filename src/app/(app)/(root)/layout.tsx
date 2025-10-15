import { Breadcrumbs } from "@/app/(app)/(root)/breadcrumbs";
import { RootSidebar } from "@/app/(app)/(root)/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getRegistryItems } from "@/lib/registry";

export default function Layout({ children }: { children: React.ReactNode }) {
  const registryItems = getRegistryItems();
  return (
    <div className="[--footer-height:calc(--spacing(20))] [--header-height:calc(--spacing(14))]">
      <header className="bg-background sticky top-0 z-10 h-(--header-height) w-full border-b">
        <div className="container mx-auto size-full">
          <div className="flex size-full items-center justify-between gap-2 px-4 lg:px-6">
            <h1 className="font-mono font-semibold lowercase">Shadcraft Registry</h1>

            <div className="ml-auto flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto">
        <SidebarProvider className="flex">
          <RootSidebar items={registryItems} className="bg-background shrink-0" />

          <SidebarInset className="min-w-0">
            <header className="flex h-12 w-full items-center gap-2 px-4 lg:px-6">
              <SidebarTrigger className="size-8" size="icon" />
              {/* Ideally this should be a parallel route {breadcrumbs} */}
              <Breadcrumbs />
            </header>

            <div className="w-full px-4 py-6 lg:px-6 lg:pb-12">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </div>

      <footer className="bg-muted z-50 h-(--footer-height) w-full border-t">
        <div className="container mx-auto size-full">
          <div className="flex size-full flex-col justify-center gap-1 px-4 lg:px-6">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Shadcraft Registry. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs">
              This is obviously just a mockup and is using dummy text and placeholder images.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
