import { Rating } from "../rating/Rating";
import styles from "./reviews.module.css";
import { useAuth } from "../authContext/useAuth";
import { ReviewForm } from "../reviews/ReviewForm";

export function Review({ review, restaurantId }) {
  const { userId } = useAuth();
  if (userId === review.user?.id) {
    return (
      <ReviewForm
        key={review.id}
        initReview={review}
        restaurantId={restaurantId}
        isEdit
      />
    );
  }
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewWrapper}>
        <div>
          <div className={styles.user}>{review.user?.name}</div>
          <div>{review.text}</div>
        </div>
        <div className={styles.ratingWrapper}>
          <Rating value={review.rating} readOnly />
        </div>
      </div>
    </div>
  );
}
