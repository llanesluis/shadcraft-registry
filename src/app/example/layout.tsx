import { ThemeToggle } from "@/components/theme-toggle";

export default function ExampleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
      {children}
    </>
  );
}
