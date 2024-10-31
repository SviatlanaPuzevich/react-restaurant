export async function getUsers() {
  const result = await fetch("http://localhost:3001/api/users");
  return result.json();
}
