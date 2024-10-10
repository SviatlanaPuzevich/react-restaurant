import { Dish } from "../dish/Dish";
import styles from "./menu.module.css";

export function Menu({ ids }) {
  return (
    <div>
      <h3 className={styles.title}>Menu:</h3>
      {ids.map((id) => (
        <Dish key={id} id={id} />
      ))}
    </div>
  );
}
