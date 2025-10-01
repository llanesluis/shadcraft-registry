import { ThemeToggle } from "@/components/theme-toggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <header className="h-12 w-full border-b">
        <div className="container mx-auto flex size-full items-center justify-between px-8">
          <h1 className="font-semibold">Shadcraft Registry</h1>
          <ThemeToggle />
        </div>
      </header>

      <div className="flex-1">{children}</div>
    </div>
  );
}
