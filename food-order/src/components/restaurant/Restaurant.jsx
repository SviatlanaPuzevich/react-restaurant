import styles from "./restaurant.module.css";
import classNames from "classnames";
import { useGetRestaurantByIdQuery } from "../../redux/services/api/api";

export function Restaurant({ id }) {
  const { isLoading, data: restaurant, error } = useGetRestaurantByIdQuery(id);
  if (isLoading) return <div>Loading restaurant...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <article
      className={styles.imgTitle}
      style={{ backgroundImage: `url(${restaurant.img})` }}
    >
      <div className={classNames(styles.title)}>
        <h2>{restaurant.name}</h2>
      </div>
    </article>
  );
}
