import styles from "./reviews.module.css";
export function Review({ review }) {
  return (
    <div className={styles.reviewCard}>
      <div key={review.id}>{review.text}</div>
      <div>{review.rating}</div>
    </div>
  );
}
