import { ThemeToggle } from "@/components/theme-toggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <header className="bg-background sticky top-0 z-10 h-12 w-full border-b">
        <div className="container mx-auto flex size-full items-center justify-between px-8">
          <h1 className="font-mono font-semibold lowercase">Shadcraft Registry</h1>
          <ThemeToggle />
        </div>
      </header>

      <div className="flex-1">{children}</div>

      <footer className="bg-muted z-10 w-full border-t">
        <div className="container mx-auto flex size-full flex-col justify-between p-8">
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
