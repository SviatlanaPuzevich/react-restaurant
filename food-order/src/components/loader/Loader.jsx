import styles from "./loader.module.css";

export function Loader() {
  return (
    <div className={styles.centerContainer}>
      <span className={styles.loader}></span>
    </div>
  );
}
