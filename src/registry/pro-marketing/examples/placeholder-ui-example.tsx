import {
  PlaceholderUI,
  PlaceholderUIInset,
} from "@/registry/pro-marketing/components/placeholder-ui";

export function PlaceholderUIExample() {
  return (
    <div className="flex flex-col gap-8">
      <PlaceholderUI>
        <PlaceholderUIInset>
          <img src="/assets/dashboard-01-light.webp" />
        </PlaceholderUIInset>
      </PlaceholderUI>

      <div className="flex gap-8">
        <PlaceholderUI>
          <PlaceholderUIInset>
            <img src="/assets/placeholder.svg" className="aspect-auto size-full object-cover" />
          </PlaceholderUIInset>
        </PlaceholderUI>

        <PlaceholderUI>
          <PlaceholderUIInset>
            <img src="/assets/placeholder.svg" className="aspect-video object-cover" />
          </PlaceholderUIInset>
        </PlaceholderUI>
      </div>
    </div>
  );
}
