import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurants";
import { RestaurantTabs } from "../restaurantTabs/RestaurantTabs";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { IDLE, PENDING } from "../../const/request-statuses";
import { useRequestStatus } from "../../redux/ui/request/use-request";

export function RestaurantsPages() {
  const requestStatus = useRequestStatus(getRestaurants);
  const restaurantIds = useSelector(selectRestaurantIds);
  if (!restaurantIds.length) {
    return <p>No restaurants</p>;
  }
  if (requestStatus === IDLE || requestStatus === PENDING) {
    return "restaurants are loading";
  }
  return (
    <>
      <RestaurantTabs ids={restaurantIds} />
      <Outlet />
    </>
  );
}
