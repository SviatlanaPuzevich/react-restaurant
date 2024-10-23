import { Button } from "../ui-kit/Button";
import styles from "./reviews.module.css";
import { useEditReviewMutation } from "../../redux/services/api/api";
import { Counter } from "../counter/Counter";
import { useReviewForm } from "./ReviewFormReducer";

export function EditableReview({ review }) {
  const {
    review: newReview,
    handleSetText,
    handleIncrease,
    handleDecrease,
  } = useReviewForm(review);
  const [editReview] = useEditReviewMutation();
  const handleEdit = () => {
    editReview({
      reviewId: newReview.id,
      review: {
        text: newReview.text,
        userId: review.user.id,
        rating: newReview.rating,
      },
    });
  };
  return (
    <form>
      <div className={styles.reviewCard}>
        <div>
          <div className={styles.user}>{review.user?.name}</div>
          <textarea
            className={styles.comment}
            value={newReview.text}
            onChange={handleSetText}
          />
        </div>
        <div>
          <Counter
            count={newReview.rating}
            decrease={handleDecrease}
            increase={handleIncrease}
          />
        </div>
        <Button text="edit" onClick={handleEdit} />
      </div>
    </form>
  );
}
