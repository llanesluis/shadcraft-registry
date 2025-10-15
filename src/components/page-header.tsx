import { cn } from "@/lib/utils";

function PageHeader({ className, children, ...props }: React.ComponentProps<"section">) {
  return (
    <section className={cn("pb-12 md:pb-16", className)} {...props}>
      <div className="container flex flex-col gap-2 xl:gap-4">{children}</div>
    </section>
  );
}

function PageHeaderHeading({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-foreground leading-tighter max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter",
        className
      )}
      {...props}
    />
  );
}

function PageHeaderDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-muted-foreground max-w-3xl text-base text-balance md:text-lg", className)}
      {...props}
    />
  );
}

function PageActions({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex w-full items-center gap-2 pt-2", className)} {...props} />;
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading };
