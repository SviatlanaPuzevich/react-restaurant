import { useTheme } from "../themeContex/useThemeContext";
import styles from "./layuot.module.css";
import classNames from "classnames";
import { ThemeButton } from "../theme-button/ThemeButton";
import { Login } from "../login/Login";
import { Link, Outlet } from "react-router-dom";
import { ScrollProgress } from "../scrollProgress/ScrollProgress";
import { Cart } from "../cart/Cart";

export function Layout() {
  const { theme } = useTheme();
  return (
    <>
      <ScrollProgress />
      <div className={styles.container}>
        <header className={classNames(styles.header, styles[theme])}>
          <ThemeButton className={styles.themeButton} />
          <Link to="home">
            <svg
              viewBox="64 64 896 896"
              width="1em"
              height="1em"
              fill="#fff"
              aria-hidden="true"
            >
              <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
            </svg>
            <span>Home</span>
          </Link>
          <div className={styles.logo}>Logo</div>
          <Login />
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
