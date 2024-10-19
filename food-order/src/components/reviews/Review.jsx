import { useSelector } from "react-redux";
import styles from "./reviews.module.css";
import { selectReviewById } from "../../redux/reviews";
import { selectUserById } from "../../redux/users";

export function Review({ id }) {
  const review = useSelector((state) => selectReviewById(state, id));
  const user = useSelector((state) => selectUserById(state, review?.userId));
  const userName = user ? user.name : "Anonimys";
  return (
    <div className={styles.reviewCard}>
      <div>{userName}</div>
      <div key={review.id}>{review.text}</div>
      <div>{review.rating}</div>
    </div>
  );
}
