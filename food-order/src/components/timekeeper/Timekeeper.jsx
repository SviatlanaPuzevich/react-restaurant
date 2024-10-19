import classNames from "classnames";
import { useState } from "react";
import styles from "./timekeeper.module.css";
import { useTimekeeper } from "./useTimekeeper";
import { useTheme } from "../themeContex/useThemeContext";

export function Timekeeper() {
  const { theme } = useTheme();
  const [time, setTime] = useState(null);
  useTimekeeper(setTime);
  return (
    <span className={classNames(styles.timekeeper, styles[theme])}>{time}</span>
  );
}
