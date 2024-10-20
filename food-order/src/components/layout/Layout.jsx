import { useTheme } from "../themeContex/useThemeContext";
import styles from "./layuot.module.css";
import classNames from "classnames";
import { ThemeButton } from "../theme-button/ThemeButton";
import { Login } from "../login/Login";
import { Outlet } from "react-router-dom";
import { ScrollProgress } from "../scrollProgress/ScrollProgress";
import { Cart } from "../cart/Cart";
import { Timekeeper } from "../timekeeper/Timekeeper";
import { HeaderNavLink } from "../headerNavLink/HeaderNavLink";

export function Layout() {
  const { theme } = useTheme();
  return (
    <>
      <ScrollProgress />
      <div className={styles.container}>
        <header className={classNames(styles.header, styles[theme])}>
          <div className={styles.felxBlock}>
            <Timekeeper />
            <HeaderNavLink />
          </div>
          <div className={styles.logo}>Logo</div>
          <div className={styles.felxBlock}>
            <ThemeButton className={styles.themeButton} />
            <Login />
          </div>
        </header>
        <main className={styles.main}>
          <Outlet />
          <Cart />
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}
