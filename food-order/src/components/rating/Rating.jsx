import { Star } from "./Star";

const MAX_RATING = 5;
export function Rating({ rating }) {
  return (
    <>
      {Array.from({ length: MAX_RATING }, (_, i) => (
        <Star key={i} isFilled={i < rating} />
      ))}
    </>
  );
}
