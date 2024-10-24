import { useState } from "react";
import { Star } from "./Star";

const MAX_RATING = 5;
export function Rating({ initValue, readOnly }) {
  const [rating, setRating] = useState(initValue);
  const handleOnclick = (payload) => {
    if (readOnly) return;
    setRating(payload);
  };
  return (
    <>
      {Array.from({ length: MAX_RATING }, (_, i) => (
        <Star
          key={i}
          isFilled={i < rating}
          payload={i + 1}
          onClick={handleOnclick}
        />
      ))}
    </>
  );
}
