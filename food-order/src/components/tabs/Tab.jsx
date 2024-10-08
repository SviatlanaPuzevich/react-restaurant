import styles from "./tabs.module.css";
import classNames from "classnames";

export function Tab({ name, isSelected, onClick }) {
  return (
    <button
      disabled={isSelected}
      className={classNames(styles.tab, { [styles.selectedTab]: isSelected })}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
