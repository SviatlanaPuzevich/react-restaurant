import { useReducer } from "react";

const DEFAULT_REVIEW_VALUE = {
  user: "",
  text: "",
  rating: 0,
};
const MAX_RATING_VALUE = 5;
const MIN_RATING_VALUE = 0;

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

export function useReviewForm(initReview) {
  const [review, dispatch] = useReducer(
    reviewReducer,
    initReview || DEFAULT_REVIEW_VALUE
  );
  const clearReview = () => {
    dispatch({ type: "clear" });
  };
  const handleSetUser = (e) => {
    dispatch({ type: "setUser", user: e.target.value });
  };
  const handleSetText = (e) => {
    dispatch({ type: "setText", text: e.target.value });
  };
  const handleIncrease = () => {
    dispatch({ type: "increase" });
  };
  const handleDecrease = () => {
    dispatch({ type: "decrease" });
  };
  return {
    review,
    clearReview,
    handleSetUser,
    handleSetText,
    handleIncrease,
    handleDecrease,
  };
}
