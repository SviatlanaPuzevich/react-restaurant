import { DishCounter } from "../counter/DishCounter";
import styles from "./dish.module.css";
import { Authorized } from "../authorized/Authorized";
import { Link } from "react-router-dom";
import classNames from "classnames";

export function Dish({ dish }) {
  return (
    <div className={styles.card}>
      <Link to={`/dish/${dish.id}`} className={classNames(styles.cardLink)}>
        <h3>{dish.name}</h3>
        <div>{dish.ingredients.join(", ")}</div>
      </Link>
      <div className={styles.price}>{dish.price + " $"} </div>
      <Authorized>
        <DishCounter id={dish.id} />
      </Authorized>
    </div>
  );
}
