import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getReviews } from "./get-reviews";
import {
  FULFILLED,
  IDLE,
  PENDING,
  REJECTED,
} from "../../const/request-statuses";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState({
    requestStatus: IDLE,
    error: null,
  }),
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
    selectReviews: (state) => Object.values(state.entities),
    selectReviewRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.fulfilled, (state, action) => {
        entityAdapter.setAll(state, action.payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.requestStatus = REJECTED;
        state.error = action.payload || action.error;
      })
      .addCase(getReviews.pending, (state) => {
        state.requestStatus = PENDING;
      }),
});

export const { selectReviewById, selectReviews, selectReviewRequestStatus } =
  reviewsSlice.selectors;
