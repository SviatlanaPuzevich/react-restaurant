import { useTheme } from "../themeContex/useThemeContext";
import styles from "./layuot.module.css";
import classNames from "classnames";
import { ThemeButton } from "../theme-button/ThemeButton";
import { Button } from "../ui-kit/Button";
import { useAuth } from "../authContext/useAuth";

export function Layout({ children }) {
  const { theme } = useTheme();
  const { isAuthorized, userName, login, logout } = useAuth();
  const loginText = isAuthorized ? "logout" : "login";
  const handleClickLogin = () => {
    if (isAuthorized) {
      logout();
    } else {
      login();
    }
  };
  return (
    <div className={styles.container}>
      <header className={classNames(styles.header, styles[theme])}>
        <ThemeButton className={styles.themeButton} />
        <div className={styles.logo}>Logo</div>
        <div>
          <span className={styles.userName}>{userName}</span>
          <Button text={loginText} onClick={handleClickLogin} size="small" />
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
