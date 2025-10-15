import { Breadcrumbs } from "@/app/(app)/(root)/breadcrumbs";
import { RootSidebar } from "@/app/(app)/(root)/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getRegistryItems } from "@/lib/registry";

export default function Layout({ children }: { children: React.ReactNode }) {
  const registryItems = getRegistryItems();
  return (
    <div className="isolate flex size-full min-h-svh flex-col [--header-height:calc(--spacing(12))]">
      <header className="bg-background sticky top-0 z-50 h-(--header-height) w-full border-b">
        <div className="container mx-auto size-full">
          <div className="flex size-full items-center justify-between gap-2 px-4 lg:px-6">
            <h1 className="font-mono font-semibold lowercase">Shadcraft Registry</h1>

            <div className="ml-auto flex items-center gap-2">
              <ThemeToggle size="icon-sm" />
            </div>
          </div>
        </div>
      </header>

      <div className="relative w-full flex-1">
        <div className="container mx-auto">
          <SidebarProvider
            className="flex"
            style={
              {
                "--sidebar-width-icon": "0rem",
              } as React.CSSProperties
            }
          >
            <RootSidebar items={registryItems} className="bg-background h-full shrink-0" />

            <SidebarInset className="relative min-w-0">
              <header className="bg-background sticky top-(--header-height) z-50 flex h-10 w-full items-center gap-4 px-4 lg:px-6">
                <SidebarTrigger size="icon-sm" className="size-8 cursor-pointer" />
                {/* Ideally this should be a parallel route {breadcrumbs} */}
                <Breadcrumbs />
              </header>

              <div className="w-full px-4 py-6 lg:px-6 lg:pb-12">{children}</div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </div>

      <footer className="bg-muted z-50 h-20 w-full border-t">
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
