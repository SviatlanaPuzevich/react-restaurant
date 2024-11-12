import { RestaurantTabs } from "../restaurantTabs/RestaurantTabs";

export function RestaurantsPages({ restaurants, children }) {
  if (!restaurants.length) {
    return <p>No restaurants</p>;
  }
  return (
    <>
      <RestaurantTabs restaurants={restaurants} />
      {children}
    </>
  );
}
