import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/restaurants";
import { RestaurantTabs } from "../restaurantTabs/RestaurantTabs";

export function RestaurantPages() {
  const restaurantIds = useSelector(selectRestaurantIds);
  if (!restaurantIds.length) {
    return <p>No restaurants</p>;
  }

  return (
    <>
      <RestaurantTabs ids={restaurantIds} />
      <Outlet />
    </>
  );
}
