import { useSelector } from "react-redux";
import { selectRestaurantsByIds } from "../../redux/restaurants";
import { Tabs } from "../Tabs/Tabs";

export function RestaurantTabs({ ids, activeId, onChange }) {
  const restaurants = useSelector((state) =>
    selectRestaurantsByIds(state, ids)
  );
  return <Tabs items={restaurants} activeId={activeId} onChange={onChange} />;
}
