import { Rating } from "../rating/Rating";
import styles from "./reviews.module.css";

export function Review({ review }) {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewWrapper}>
        <div>
          <div className={styles.user}>{review.user?.name}</div>
          <div>{review.text}</div>
        </div>
        <div className={styles.ratingWrapper}>
          <Rating rating={review.rating} />
        </div>
      </div>
    </div>
  );
}
