import { Dish } from "../dish/Dish";

export function Menu({ menu }) {
  return (
    <>
      <h3>Menu:</h3>
      {menu.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </>
  );
}
