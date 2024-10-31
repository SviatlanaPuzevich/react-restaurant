import { Menu } from "../../../../components/menu/Menu";
import { getMenu } from "../../../services/get-menu";

export default async function MenuPage({ params }) {
  const { restaurantId } = await params;
  const menu = await getMenu(restaurantId);

  return <Menu menu={menu} />;
}
