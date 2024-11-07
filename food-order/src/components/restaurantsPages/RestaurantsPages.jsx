"use client";
import { RestaurantTabs } from "../restaurantTabs/RestaurantTabs";
import { useGetRestaurantsQuery } from "../../redux/services/api/api";

export function RestaurantsPages({ children }) {
  const { data, isLoading } = useGetRestaurantsQuery();
  if (isLoading) {
    return "restaurants are loading";
  }
  if (!data.length) {
    return <p>No restaurants</p>;
  }
  return (
    <>
      <RestaurantTabs restaurants={data} />
      {children}
    </>
  );
}
