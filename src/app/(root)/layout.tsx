import { RootSidebar } from "@/app/(root)/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getRegistryItems } from "@/lib/registry";

export default function Layout({ children }: { children: React.ReactNode }) {
  const registryItems = getRegistryItems();
  return (
    <div className="[--footer-height:calc(--spacing(20))] [--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <header className="bg-background sticky top-0 z-10 h-(--header-height) w-full border-b">
          <div className="container mx-auto flex size-full items-center justify-between px-4 lg:px-8">
            <h1 className="font-mono font-semibold lowercase">Shadcraft Registry</h1>

            <div className="ml-auto flex items-center gap-2">
              <ThemeToggle />
              <SidebarTrigger className="size-9 md:hidden" />
            </div>
          </div>
        </header>

        <div className="container mx-auto flex flex-1 gap-4 px-4 md:gap-8 lg:px-8">
          <RootSidebar items={registryItems} className="bg-background shrink-0" />
          <SidebarInset className="mx-auto min-w-0 py-10">{children}</SidebarInset>
        </div>
      </SidebarProvider>

      <footer className="bg-muted z-10 h-(--footer-height) w-full border-t">
        <div className="container mx-auto flex size-full flex-col justify-center px-4 lg:px-8">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Shadcraft Registry. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            This is obviously just a mockup and is using dummy text and placeholder images.
          </p>
        </div>
      </footer>
    </div>
  );
}
