import { UIShowcase, UIShowcaseInset } from "@/registry/pro-marketing/ui/ui-showcase";

export function UIShowcaseExample() {
  return (
    <div className="flex flex-col gap-8 px-4 py-8 lg:px-8">
      <UIShowcase>
        <UIShowcaseInset>
          <img src="/assets/dashboard-01-light.webp" />
        </UIShowcaseInset>
      </UIShowcase>

      <div className="flex gap-8">
        <UIShowcase>
          <UIShowcaseInset>
            <img src="/assets/placeholder.svg" />
          </UIShowcaseInset>
        </UIShowcase>

        <UIShowcase>
          <UIShowcaseInset>
            <img src="/assets/placeholder.svg" className="aspect-video" />
          </UIShowcaseInset>
        </UIShowcase>
      </div>
    </div>
  );
}
