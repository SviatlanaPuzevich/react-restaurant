import { useEffect, useState } from "react";

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
        style={{
          backgroundColor: "green",
          height: 24,
          width: width,
          position: "fixed",
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
