import { Dish } from "../dish/Dish";
import styles from "./menu.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDishes } from "../../redux/entities/dishes/get-dishes";
import { selectMenu } from "../../redux/entities/dishes";
import { IDLE, PENDING } from "../../const/request-statuses";
import { useRequestStatus } from "../../redux/ui/request/use-request";

export function Menu() {
  const { restaurantId } = useParams();
  const requestStatus = useRequestStatus(getDishes, restaurantId);
  const menu = useSelector(selectMenu);
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
