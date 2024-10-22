import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants";
import styles from "./restaurant.module.css";
import classNames from "classnames";

export function Restaurant({ id }) {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  return (
    <article>
      <div className={classNames(styles.title)}>
        <h2>{restaurant.name}</h2>
      </div>
    </article>
  );
}
