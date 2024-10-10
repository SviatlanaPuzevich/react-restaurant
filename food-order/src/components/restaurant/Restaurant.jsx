import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants";

export function Restaurant({ id }) {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  return (
    <article>
      <h2>{restaurant.name}</h2>
      <Menu ids={restaurant.menu} />
      <Reviews ids={restaurant.reviews} />
    </article>
  );
}
