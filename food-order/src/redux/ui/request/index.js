import { createSlice } from "@reduxjs/toolkit";
import {
  FULFILLED,
  IDLE,
  PENDING,
  REJECTED,
} from "../../../const/request-statuses";

export const requestSlice = createSlice({
  name: "requests",
  initialState: {},
  selectors: {
    selectRequestStatusById: (state, id) => state[id] || IDLE,
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state, { meta }) => {
          state[meta.requestId] = PENDING;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = FULFILLED;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { meta }) => {
          state[meta.requestId] = REJECTED;
        }
      ),
});

export const { selectRequestStatusById } = requestSlice.selectors;
