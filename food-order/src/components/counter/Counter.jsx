import styles from "./counter.module.css";
export function Counter({ count, decrease, increase }) {
  return (
    <div className={styles.counterContainer}>
      <span className={styles.count}>{count}</span>
      <div>
        <button
          className={styles.counterButton}
          type="button"
          onClick={decrease}
        >
          -
        </button>
        <button
          className={styles.counterButton}
          type="button"
          onClick={increase}
        >
          +
        </button>
      </div>
    </div>
  );
}
