import { useSelector } from "react-redux";
import { CartItem } from "../cartItem/CartItem";
import { selectCartItems } from "../../redux/ui/cart";

export function Cart() {
  const cartItems = useSelector(selectCartItems);
  if (!cartItems.length) {
    return <p>Cart is empty</p>;
  }
  return (
    <ul>
      {cartItems.map(({ id, amount }) => (
        <li key={id}>
          <CartItem id={id} amount={amount} />
        </li>
      ))}
    </ul>
  );
}
