import { DishCounter } from "../counter/DishCounter";
import styles from "./dish.module.css";

export function Dish({ dish }) {
  return (
    <div className={styles.card}>
      <h3>{dish.name}</h3>
      <div>{dish.ingredients.join(", ")}</div>
      <div className={styles.price}>{dish.price}</div>
      <DishCounter />
    </div>
  );
}
