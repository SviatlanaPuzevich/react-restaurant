import { useGetDishByIdQuery } from "../../redux/services/api/api";

export function CartItem({ id, amount }) {
  const { isLoading, error, data } = useGetDishByIdQuery(id);
  if (isLoading) return;
  if (!data) {
    return "no name";
  }
  return (
    <div>
      {data.name} - {amount}
    </div>
  );
}
