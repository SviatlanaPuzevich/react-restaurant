import { Counter } from "./Counter";
import { useState } from "react";

export function DishCounter() {
  let [count, setCount] = useState(0);
  const increase = () => {
    setCount((count) => ++count);
  };
  const decrease = () => {
    if (count <= 0) return;
    setCount((count) => --count);
  };
  return <Counter count={count} decrease={decrease} increase={increase} />;
}
