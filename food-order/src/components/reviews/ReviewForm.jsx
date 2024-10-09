import { Counter } from "../counter/Counter";
import { useReviewForm } from "./ReviewFormReducer";
import styles from "./reviews.module.css";
import classNames from "classnames";
import { Button } from "../ui-kit/Button";

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
    <div className={styles.reviewCard}>
      <form>
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
          <Button text="Save" type="submit" className={styles.submitButton} />
          <Button
            text="Clear"
            type="button"
            onClick={clearReview}
            className={styles.submitButton}
          />
        </div>
      </form>
    </div>
  );
}
