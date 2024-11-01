import { Star } from "./Star";

const MAX_RATING = 5;
export function Rating({ value, readOnly, onChange }) {
  const handleOnclick = (payload) => {
    if (readOnly) return;
    onChange?.(payload);
  };
  return (
    <>
      {Array.from({ length: MAX_RATING }, (_, i) => (
        <Star
          key={i}
          isFilled={i < value}
          payload={i + 1}
          onClick={handleOnclick}
        />
      ))}
    </>
  );
}
