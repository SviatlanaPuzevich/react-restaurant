import { Review } from "./Review";
import { ReviewForm } from "./ReviewForm";

export function Reviews({ reviews }) {
  const header = reviews.length > 0 ? "Reviews" : "No reviews";
  return (
    <>
      <h3>{header}</h3>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
      <ReviewForm/>
    </>
  );
}
