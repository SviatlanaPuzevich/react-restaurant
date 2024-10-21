import { DishCounter } from "../counter/DishCounter";
import styles from "./dish.module.css";
import { Authorized } from "../authorized/Authorized";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/dishes";
import { Link } from "react-router-dom";
import classNames from "classnames";

export function Dish({ id }) {
  const dish = useSelector((state) => selectDishById(state, id));
  return (
    <div className={styles.card}>
      <Link to={`/dish/${id}`} className={styles.cardLink}>
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
