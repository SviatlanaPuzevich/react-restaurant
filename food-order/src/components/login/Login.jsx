import { useAuth } from "../authContext/useAuth";
import { Button } from "../ui-kit/Button";
import styles from "./login.module.css";

export function Login() {
  const { isAuthorized, userName, login, logout } = useAuth();
  const loginText = isAuthorized ? "logout" : "login";
  return (
    <div>
      <span className={styles.userName}>{userName}</span>
      <Button
        text={loginText}
        onClick={isAuthorized ? logout : login}
        size="small"
      />
    </div>
  );
}
