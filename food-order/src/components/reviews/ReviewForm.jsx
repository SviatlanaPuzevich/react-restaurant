import { Counter } from "../counter/Counter";
import { useReviewForm } from "./ReviewFormReducer";

export function ReviewForm() {
  const {
    review,
    clearReview,
    handleSetUser,
    handleSetText,
    handleIncrease,
    handleDecrease,
  } = useReviewForm();
  return (
    <form>
      <label>
        Name:
        <input value={review.user} onChange={handleSetUser} />
      </label>
      <label>
        Comment:
        <textarea
          placeholder="your comment..."
          value={review.text}
          onChange={handleSetText}
        />
      </label>
      <Counter
        count={review.rating}
        decrease={handleDecrease}
        increase={handleIncrease}
      />
      <input type="submit" value="Save" />
      <button type="button" onClick={clearReview}>
        Clear
      </button>
    </form>
  );
}
