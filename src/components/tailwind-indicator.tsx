export function TailwindIndicator({ showInProduction = false }: { showInProduction?: boolean }) {
  if (process.env.NODE_ENV === "production" && showInProduction === false) {
    return null;
  }

  return (
    <div
      data-tailwind-indicator=""
      className="bg-muted text-foreground fixed bottom-1 left-1 z-50 flex size-8 items-center justify-center rounded-full p-3 font-mono text-xs"
    >
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
