import { useTheme } from "../themeContex/ThemeContext";
import styles from "./layuot.module.css";
import classNames from "classnames";
import { ThemeButton } from "../theme-button/ThemeButton";
import { Button } from "../ui-kit/Button";

export function Layout({ children }) {
  const { theme } = useTheme();
  return (
    <div className={styles.container}>
      <header className={classNames(styles.header, styles[theme])}>
        <ThemeButton className={styles.themeButton} />
        <div className={styles.logo}>Logo</div>
        <Button text="Login" size="small" />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
