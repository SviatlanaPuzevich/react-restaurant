import { useTheme } from "../themeContex/useThemeContext";
import styles from "./ui-kit.module.css";
import classNames from "classnames";

export function Button({ text, type, onClick, className, isActive, size }) {
  const { theme } = useTheme();

  return (
    <button
      disabled={isActive}
      type={type}
      onClick={onClick}
      className={classNames(
        styles.button,
        styles[size || "large"],
        styles[theme],
        className
      )}
    >
      {text}
    </button>
  );
}
