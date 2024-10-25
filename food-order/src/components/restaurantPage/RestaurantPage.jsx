"use client";
import classNames from "classnames";
import { useParams, usePathname } from "next/navigation";
import styles from "./restaurantPage.module.css";
import { Restaurant } from "../restaurant/Restaurant";
import Link from "next/link";

const MENU_PATH = "/menu";
const REVIEWS_PATH = "/reviews";

export function RestaurantPage({ children }) {
  const { restaurantId } = useParams();
  const path = `/restaurants/${restaurantId}`;
  const pathName = usePathname();
  return (
    <div>
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
      <Restaurant key={restaurantId} id={restaurantId} />
      {children}
    </div>
  );
}
