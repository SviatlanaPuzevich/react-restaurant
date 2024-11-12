import styles from "./restaurant.module.css";
import { useMemo } from "react";
import { Rating } from "../rating/Rating";

export function Restaurant({ restaurant, reviews }) {
  const rating = useMemo(() => {
    if (isReviewsLoading) {
      return 0;
    }
    return Math.round(
      reviews.reduce((sum, review) => {
        return sum + review.rating;
      }, 0) / reviews.length
    );
  }, [reviews]);
  return (
    <article
      className={styles.imgTitle}
      style={{ backgroundImage: `url(${restaurant.img})` }}
    >
      <div className={styles.title}>{restaurant.name}</div>
      <div>
        <Rating readOnly value={rating} />
      </div>
    </article>
  );
}
