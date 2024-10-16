import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../const/normalized-mock";

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    entities: normalizedReviews.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {}),
  },
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
  },
});

export const { selectReviewById } = reviewsSlice.selectors;
