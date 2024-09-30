
import {DishCounter} from "../counter/DishCounter";

export function Dish({ dish }) {
  return (
    <div>
      <h3>{dish.name}</h3>
      <div>{dish.ingredients.join(", ")}</div>
      <DishCounter/>
    </div>
  );
}
