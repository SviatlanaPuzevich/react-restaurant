import { Dish } from "../dish/Dish";
import styles from "./menu.module.css";

export function Menu({ menu }) {
  return (
    <div>
      <h3 className={styles.title}>Menu:</h3>
      {menu.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
}
