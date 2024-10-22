import classNames from "classnames";
import { Restaurant } from "../restaurant/restaurant";
import { NavLink, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styles from "./restaurantPage.module.css";

export function RestaurantPage() {
  const { restaurantId } = useParams();
  return (
    <div>
      <div className={classNames(styles.tabContainer)}>
        <NavLink
          to="menu"
          className={({ isActive }) =>
            classNames(styles.tab, isActive && styles.selected)
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            classNames(styles.tab, {
              isActive: isActive,
            })
          }
        >
          Reviews
        </NavLink>
      </div>
      <Restaurant key={restaurantId} id={restaurantId} />
      <Outlet />
    </div>
  );
}
