import { useState } from "react";

export function Dish({ dish }) {
  let [count, setCount] = useState(0);
  const increase = () => {
    if (count >= 5) return;
    setCount((count) => ++count);
  };
  const decrease = () => {
    if (count <= 0) return;
    setCount((count) => --count);
  };
  return (
    <div>
      <h3>{dish.name}</h3>
      <div>{dish.ingredients.join(", ")}</div>
      <button onClick={decrease}>-</button> {count}
      <button onClick={increase}>+</button>
    </div>
  );
}
