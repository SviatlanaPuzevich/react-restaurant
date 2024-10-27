"use client";

import styles from "./dishPage.module.css";
import { useGetDishByIdQuery } from "../../redux/services/api/api";
import { useParams } from "next/navigation";

export function DishPage() {
  const { dishId } = useParams();
  const { isLoading, error, data: dish } = useGetDishByIdQuery(dishId);
  if (isLoading) return <div>Loading menu...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className={styles.card}>
      <h3>{dish.name}</h3>
      <ul>
        {dish.ingredients.map((ingredient) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
    </div>
  );
}
