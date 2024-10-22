import { useSelector } from "react-redux";
import { selectRestaurantsByIds } from "../../redux/restaurants";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./restaurantTabs.module.css";

export function RestaurantTabs({ ids }) {
  const restaurants = useSelector((state) =>
    selectRestaurantsByIds(state, ids)
  );

  return (
    <div className={classNames(styles.tabContainer)}>
      {restaurants.map(({ id, name }) => {
        return (
          <NavLink
            key={id}
            to={id}
            className={({ isActive }) =>
              classNames(styles.tab, isActive && styles.selected)
            }
          >
            {name}
          </NavLink>
        );
      })}
    </div>
  );
}
