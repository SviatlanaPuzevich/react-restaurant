// "use client";
import { useEffect, useState } from "react";
import styles from "./scrollProgress.module.css";

export function ScrollProgress() {
  const [width, setWidth] = useState("0");
  useEffect(() => {
    const handleScroll = () => {
      setWidth(getScrollPercent() + "%");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        className={styles.progressScroll}
        style={{
          width: width,
        }}
      ></div>
    </div>
  );
}

function getScrollPercent() {
  const scrollTop = window.scrollY;
  const docHeight = document.body.offsetHeight;
  const winHeight = window.innerHeight;
  const scrollPercent = Math.min(
    1,
    Math.max(0, scrollTop / (docHeight - winHeight))
  );
  return Math.round(scrollPercent * 100);
}
