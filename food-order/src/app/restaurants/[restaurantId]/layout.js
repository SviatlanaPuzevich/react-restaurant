import { RestaurantPage } from "../../../components/restaurantPage/RestaurantPage";
import { getRestaurantById } from "../../services/get-restaurant-by-id";

export function generateStaticParams() {
  return [
    { restaurantId: "bb8afbec-2fec-491f-93e9-7f13950dd80b" },
    { restaurantId: "d9241927-09e1-44f3-8986-a76346869037" },
  ];
}

export async function generateMetadata({ params }) {
  const restaurantId = (await params).restaurantId;
  const restaurant = await getRestaurantById(restaurantId);
  return {
    title: restaurant.name,
  };
}

export default async function RestaurantLayout({ params, children }) {
  const { restaurantId } = await params;
  const restaurant = await getRestaurantById(restaurantId);
  return <RestaurantPage restaurant={restaurant}>{children}</RestaurantPage>;
}
