import { Counter } from "./Counter";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectAmountById,
} from "../../redux/ui/cart";

export function DishCounter({ id }) {
  const amount = useSelector((state) => selectAmountById(state, id));
  const dispatch = useDispatch();
  const increase = () => dispatch(addToCart(id));
  const decrease = () => dispatch(removeFromCart(id));
  return <Counter count={amount} decrease={decrease} increase={increase} />;
}
