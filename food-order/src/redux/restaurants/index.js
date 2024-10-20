import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";
import {
  FULFILLED,
  IDLE,
  PENDING,
  REJECTED,
} from "../../const/request-statuses";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: entityAdapter.getInitialState({ requestStatus: IDLE }),
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantsByIds: (state, ids) => ids.map((id) => state.entities[id]),
    selectRestaurantsRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = REJECTED;
      }),
});

export const {
  selectRestaurantIds,
  selectRestaurantById,
  selectRestaurantsByIds,
  selectRestaurantsRequestStatus,
} = restaurantSlice.selectors;
