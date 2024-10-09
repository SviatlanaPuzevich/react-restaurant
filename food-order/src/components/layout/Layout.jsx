import { useTheme } from "../themeContex/useThemeContext";
import styles from "./layuot.module.css";
import classNames from "classnames";
import { ThemeButton } from "../theme-button/ThemeButton";
import { Login } from "../login/Login";

export function Layout({ children }) {
  const { theme } = useTheme();
  return (
    <div className={styles.container}>
      <header className={classNames(styles.header, styles[theme])}>
        <ThemeButton className={styles.themeButton} />
        <div className={styles.logo}>Logo</div>
        <Login />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
