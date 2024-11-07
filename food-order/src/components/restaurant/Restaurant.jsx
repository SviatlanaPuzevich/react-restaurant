import styles from "./restaurant.module.css";
import {
  useGetRestaurantByIdQuery,
  useGetReviewsQuery,
} from "../../redux/services/api/api";
import { useMemo } from "react";
import { Rating } from "../rating/Rating";

export function Restaurant({ id }) {
  const { isLoading, data: restaurant, error } = useGetRestaurantByIdQuery(id);
  const {
    isLoading: isReviewsLoading,
    data: reviews,
    error: reviewsError,
  } = useGetReviewsQuery(id);
  const rating = useMemo(() => {
    if (isReviewsLoading) {
      return 0;
    }
    return Math.round(
      reviews.reduce((sum, review) => {
        return sum + review.rating;
      }, 0) / reviews.length
    );
  }, [reviews, isReviewsLoading]);
  if (isLoading || isReviewsLoading) return <div>Loading restaurant...</div>;
  if (error || reviewsError) return <div>Error: {error.message}</div>;
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
