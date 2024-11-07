import classNames from "classnames";
import styles from "./restaurantTabs.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function RestaurantTabs({ restaurants }) {
  const pathName = usePathname();
  return (
    <div className={classNames(styles.tabContainer)}>
      {restaurants.map(({ id, name }) => {
        return (
          <Link
            key={id}
            href={`/restaurants/${id}`}
            className={classNames(
              styles.tab,
              pathName.includes(id) && styles.selected
            )}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
}
