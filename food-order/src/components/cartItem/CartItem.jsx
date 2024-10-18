import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/dishes";

export function CartItem({ id, amount }) {
  const { name } = useSelector((state) => selectDishById(state, id)) || {};
  if (!name) {
    return null;
  }
  return (
    <div>
      {name} - {amount}
    </div>
  );
}
