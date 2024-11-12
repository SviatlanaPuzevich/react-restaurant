import { Counter } from "../counter/Counter";
import { useReviewForm } from "./ReviewFormReducer";
import styles from "./reviews.module.css";
import classNames from "classnames";
import { Button } from "../ui-kit/Button";
import {
  useAddReviewMutation,
  useEditReviewMutation,
} from "../../redux/services/api/api";
import { useAuth } from "../authContext/useAuth";

export function ReviewForm({ restaurantId, isEdit, initReview }) {
  const { userId } = useAuth();
  const { review, clearReview, handleSetText, handleIncrease, handleDecrease } =
    useReviewForm(initReview);
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
  const [editReview] = useEditReviewMutation();
  const handleEdit = () => {
    editReview({
      reviewId: review.id,
      review: {
        text: review.text,
        userId: review.user.id,
        rating: review.rating,
      },
      restaurantId,
    });
  };
  if (isFetching) {
    return "Reviws are updating...";
  }
  return (
    <div className={styles.reviewCard}>
      <form onSubmit={(e) => e.preventDefault()}>
        {isEdit && <p className={styles.user}>{review.user?.name}</p>}
        <div className={classNames(styles.formItem, styles.commentContainer)}>
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
            text={isEdit ? "Edit" : "Save"}
            type="submit"
            className={styles.submitButton}
            onClick={isEdit ? handleEdit : handleSubmit}
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
