import { StarRating } from "@/registry/pro-marketing/components/star-rating";

export function StarRatingExample() {
  return (
    <div className="grid gap-8 px-4 py-8 md:grid-cols-2 lg:px-8">
      <div className="flex flex-col gap-8">
        <StarRating value={5} />
        <StarRating value={1} label="Empty stars" />
        <StarRating value={2.5} label="Partial stars" />
        <StarRating value={5} label="Full stars" />
        <StarRating value={5} className="text-yellow-500" label="Custom color" />
        <StarRating value={6} max={8} label="Custom quantity" />
      </div>

      <div className="flex flex-col gap-8">
        <StarRating value={5} size="sm" label="Size small" />
        <StarRating value={5} size="md" label="Size medium" />
        <StarRating value={5} size="lg" label="Size large" />
        <StarRating value={5} alignment="left" label="Alignment left" />
        <StarRating value={5} alignment="center" label="Alignment center" />
        <StarRating value={5} alignment="right" label="Alignment right" />
      </div>
    </div>
  );
}
