import { useSelector } from "react-redux";
import styles from "./reviews.module.css";
import { selectUserById } from "../../redux/entities/users";

export function Review({ review }) {
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
