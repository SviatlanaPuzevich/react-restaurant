import styles from "./restaurant.module.css";
import classNames from "classnames";

export function Restaurant({ restaurant }) {
  return (
    <article>
      <div className={classNames(styles.title)}>
        <h2>{restaurant.name}</h2>
      </div>
    </article>
  );
}
