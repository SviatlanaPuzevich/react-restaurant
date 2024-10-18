import { Restaurant } from "../restaurant/restaurant";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/restaurants";
import { RestaurantTabs } from "../restaurantTabs/RestaurantTabs";

export function RestaurantView() {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeId, setActiveId] = useState(restaurantIds[0]);

  if (!restaurantIds.length) {
    return <p>No restaurants</p>;
  }

  return (
    <>
      <RestaurantTabs
        activeId={activeId}
        onChange={setActiveId}
        ids={restaurantIds}
      />
      <Restaurant key={activeId} id={activeId} />
    </>
  );
}
