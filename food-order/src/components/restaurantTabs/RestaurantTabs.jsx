import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./restaurantTabs.module.css";

export function RestaurantTabs({ restaurants }) {
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
