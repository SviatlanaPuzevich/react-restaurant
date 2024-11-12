import { RestaurantsPages } from "../../components/restaurantsPages/RestaurantsPages";
import { getRestaurants } from "../services/get-restaurants";

export default async function RestaurantsLayout({ children }) {
  const restaurants = await getRestaurants();
  return (
    <RestaurantsPages restaurants={restaurants}>{children}</RestaurantsPages>
  );
}
