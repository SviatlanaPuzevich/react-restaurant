import { redirect } from "next/navigation";

export default async function RestaurantPage({ params }) {
  const { restaurantId } = await params;
  redirect(`/restaurants/${restaurantId}/menu`);
  return null;
}
