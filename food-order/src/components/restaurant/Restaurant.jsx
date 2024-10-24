import styles from "./restaurant.module.css";
import classNames from "classnames";
import { useGetRestaurantByIdQuery } from "../../redux/services/api/api";

export function Restaurant({ id }) {
  const { isLoading, data, error } = useGetRestaurantByIdQuery(id);
  if (isLoading) return <div>Loading restaurant...</div>;
  if (error) return <div>Error: {error.message}</div>;
  // const restaurant = useSelector((state) => selectRestaurantById(state, id));
  return (
    <article>
      <div className={classNames(styles.title)}>
        <h2>{data.name}</h2>
      </div>
    </article>
  );
}
