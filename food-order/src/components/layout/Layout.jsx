import styles from "./layuot.module.css";

export function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}></header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
