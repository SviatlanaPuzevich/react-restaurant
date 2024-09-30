import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [width, setWidth] = useState("0");
  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = Math.min(
        1,
        Math.max(0, scrollTop / (docHeight - winHeight))
      );
      let width = Math.round(scrollPercent * 100) + "%";
      setWidth(width);
      console.log(scrollPercent);
      console.log(width);
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
