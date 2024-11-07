"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import styles from "./restaurantPage.module.css";
import { Restaurant } from "../restaurant/Restaurant";
import Link from "next/link";

const MENU_PATH = "/menu";
const REVIEWS_PATH = "/reviews";

export function RestaurantPage({ restaurant, children }) {
  const restaurantId = restaurant.id;
  const path = `/restaurants/${restaurantId}`;
  const pathName = usePathname();
  return (
    <div>
      <Restaurant key={restaurantId} id={restaurantId} />
      <div className={classNames(styles.tabContainer)}>
        <Link
          href={`${path}${MENU_PATH}`}
          className={classNames(
            styles.tab,
            pathName.includes(MENU_PATH) && styles.selected
          )}
        >
          Menu
        </Link>
        <Link
          href={`${path}${REVIEWS_PATH}`}
          className={classNames(
            styles.tab,
            pathName.includes(REVIEWS_PATH) && styles.selected
          )}
        >
          Reviews
        </Link>
      </div>
      {children}
    </div>
  );
}
