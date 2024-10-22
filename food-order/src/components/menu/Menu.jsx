import { Dish } from "../dish/Dish";
import styles from "./menu.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants";
import { useParams } from "react-router-dom";

export function Menu() {
  const { restaurantId } = useParams();
  const { menu } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  return (
    <div>
      <h3 className={styles.title}>Menu:</h3>
      {menu.map((id) => (
        <Dish key={id} id={id} />
      ))}
    </div>
  );
}
