import styles from "./dishPage.module.css";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/dishes";
import { useParams } from "react-router-dom";

export function DishPage() {
  const { dishId } = useParams();
  const { name, ingredients } = useSelector((state) =>
    selectDishById(state, dishId)
  );
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <ul>
        {ingredients.map((ingredient) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
    </div>
  );
}
