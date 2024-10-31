export async function getRestaurantById(restaurantId) {
  const result = await fetch(
    `http://localhost:3001/api/restaurant/${restaurantId}`
  );
  return result.json();
}
