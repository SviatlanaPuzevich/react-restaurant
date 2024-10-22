import { useEffect } from "react";

export function useTimekeeper(callback) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const init = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
      callback(init);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [callback]);
}
