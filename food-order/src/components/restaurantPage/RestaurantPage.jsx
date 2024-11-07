import classNames from "classnames";
import { NavLink, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styles from "./restaurantPage.module.css";
import { Restaurant } from "../restaurant/Restaurant";

export function RestaurantPage() {
  const { restaurantId } = useParams();
  return (
    <div>
      <Restaurant key={restaurantId} id={restaurantId} />
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
      <Outlet />
    </div>
  );
}
