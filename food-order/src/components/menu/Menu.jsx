import { Dish } from "../dish/Dish";
import styles from "./menu.module.css";
import { useParams } from "react-router-dom";
import { useGetDishesQuery } from "../../redux/services/api/api";

export function Menu() {
  const { restaurantId } = useParams();
  const { isLoading, error, data: menu } = useGetDishesQuery(restaurantId);
  if (isLoading) return <div>Loading menu...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h3 className={styles.title}>Menu:</h3>
      {menu.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
}
