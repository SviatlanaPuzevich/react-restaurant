import { Dish } from "../dish/Dish";
import styles from "./menu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDishes } from "../../redux/dishes/get-dishes";
import { selectDishesRequestStatus, selectMenu } from "../../redux/dishes";
import { IDLE, PENDING } from "../../const/request-statuses";

export function Menu() {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishes(restaurantId));
  }, [dispatch, restaurantId]);
  const menu = useSelector(selectMenu);
  const requestStatus = useSelector((state) =>
    selectDishesRequestStatus(state)
  );
  if (requestStatus === IDLE || requestStatus === PENDING) {
    return "dishes are loading";
  }
  return (
    <div>
      <h3 className={styles.title}>Menu:</h3>
      {menu.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
}
