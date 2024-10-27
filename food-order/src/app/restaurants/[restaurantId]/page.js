"use client";
import { redirect, useParams } from "next/navigation";

export default function RestaurantPage() {
  const { restaurantId } = useParams();
  redirect(`/restaurants/${restaurantId}/menu`);
  return null;
}
