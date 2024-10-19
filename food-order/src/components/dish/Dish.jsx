import { DishCounter } from "../counter/DishCounter";
import styles from "./dish.module.css";
import { Authorized } from "../authorized/Authorized";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/dishes";

export function Dish({ id }) {
  const dish = useSelector((state) => selectDishById(state, id));
  return (
    <div className={styles.card}>
      <h3>{dish.name}</h3>
      <div>{dish.ingredients.join(", ")}</div>
      <div className={styles.price}>{dish.price}</div>
      <Authorized>
        <DishCounter id={dish.id} />
      </Authorized>
    </div>
  );
}
