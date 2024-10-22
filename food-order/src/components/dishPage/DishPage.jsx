import styles from "./dishPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDishById,
  selectDishesRequestStatus,
} from "../../redux/entities/dishes";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDishById } from "../../redux/entities/dishes/get-dishes";
import { IDLE, PENDING } from "../../const/request-statuses";

export function DishPage() {
  const { dishId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishById(dishId));
  }, [dispatch, dishId]);
  const requestStatus = useSelector(selectDishesRequestStatus);
  const dish = useSelector((state) => selectDishById(state, dishId));
  if (requestStatus === IDLE || requestStatus === PENDING) {
    return "dish is  loading";
  }

  const { name, ingredients } = dish;
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
