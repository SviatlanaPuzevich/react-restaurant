export async function getRestaurants() {
  const result = await fetch("http://localhost:3001/api/restaurants");
  return result.json();
}
