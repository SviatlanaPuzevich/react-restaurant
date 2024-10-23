import { Counter } from "../counter/Counter";
import { useReviewForm } from "./ReviewFormReducer";
import styles from "./reviews.module.css";
import classNames from "classnames";
import { Button } from "../ui-kit/Button";
import { useAddReviewMutation } from "../../redux/services/api/api";
import { useAuth } from "../authContext/useAuth";

export function ReviewForm({ restaurantId }) {
  const { userId } = useAuth();
  const {
    review,
    clearReview,
    handleSetUser,
    handleSetText,
    handleIncrease,
    handleDecrease,
  } = useReviewForm();
  const [addReview, { isFetching, error }] = useAddReviewMutation();
  const handleSubmit = () => {
    addReview({
      restaurantId,
      review: {
        text: review.text,
        userId,
        rating: review.rating,
      },
    });
  };
  return (
    <div className={styles.reviewCard}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={classNames(styles.formItem, styles.commentContainer)}>
          <label className={styles.label}>Name:</label>
          <input
            className={styles.comment}
            value={review.user}
            onChange={handleSetUser}
          />
          <label className={styles.label}>Comment:</label>
          <textarea
            className={styles.comment}
            placeholder="your comment..."
            value={review.text}
            onChange={handleSetText}
          />
        </div>
        <Counter
          count={review.rating}
          decrease={handleDecrease}
          increase={handleIncrease}
        />
        <div className={styles.formItem}>
          <Button
            text="Save"
            type="submit"
            className={styles.submitButton}
            onClick={handleSubmit}
          />
          <Button
            text="Clear"
            type="button"
            onClick={clearReview}
            className={styles.submitButton}
          />
        </div>
      </form>
      {error && <div>Error: {error.message}</div>}
    </div>
  );
}
