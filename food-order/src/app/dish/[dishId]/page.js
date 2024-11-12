import { DishPage } from "../../../components/dishPage/DishPage";
import { getDish } from "../../services/get-dish-by-id";

export default async function Dish({ params }) {
  const { dishId } = await params;
  const dish = await getDish(dishId);
  return <DishPage dish={dish} />;
}
