import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRestaurantIds,
  selectRestaurantsRequestStatus,
} from "../../redux/restaurants";
import { RestaurantTabs } from "../restaurantTabs/RestaurantTabs";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/restaurants/get-restaurants";
import { IDLE, PENDING } from "../../const/request-statuses";

export function RestaurantPages() {
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getRestaurants());
  }, [dispath]);
  const restaurantIds = useSelector(selectRestaurantIds);
  const requestStatus = useSelector(selectRestaurantsRequestStatus);
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
