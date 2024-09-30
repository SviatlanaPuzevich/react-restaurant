import { useReducer } from "react";
import { Counter } from "../counter/Counter";

const DEFAULT_REVIEW_VALUE = {
  user: "",
  text: "",
  rating: 0,
};
const MAX_RATING_VALUE = 5;
const MIN_RATING_VALUE = 0;

export function ReviewForm() {
  const [review, dispatch] = useReducer(reviewReducer, DEFAULT_REVIEW_VALUE);
  const clearReview = () => {
    dispatch({ type: "clear" });
  };
  const handleSetUser = (e) => {
    dispatch({ type: "setUser", user: e.target.value });
  };
  const handleSetText = (e) => {
    dispatch({ type: "setText", user: e.target.value });
  };
  const handleIncrease = () => {
    dispatch({ type: "increase" });
  };
  const handleDecrease = () => {
    dispatch({ type: "decrease" });
  };
  return (
    <form>
      <label>
        Name:
        <input value={review.user} onChange={handleSetUser} />
      </label>
      <label>
        Comment:
        <textarea
          placeholder="your comment..."
          value={review.text}
          onChange={handleSetText}
        />
      </label>
      <Counter
        count={review.rating}
        decrease={handleDecrease}
        increase={handleIncrease}
      />
      <input type="submit" value="Save" />
      <button type="button" onClick={clearReview}>
        Clear
      </button>
    </form>
  );
}

function reviewReducer(review, action) {
  switch (action.type) {
    case "clear": {
      return {
        ...DEFAULT_REVIEW_VALUE,
      };
    }
    case "setUser": {
      return {
        ...review,
        user: action.user,
      };
    }
    case "setText": {
      return {
        ...review,
        text: action.text,
      };
    }
    case "increase": {
      if (review.rating >= MAX_RATING_VALUE) {
        return review;
      }
      return {
        ...review,
        rating: review.rating + 1,
      };
    }
    case "decrease": {
      if (review.rating <= MIN_RATING_VALUE) {
        return review;
      }
      return {
        ...review,
        rating: review.rating - 1,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
