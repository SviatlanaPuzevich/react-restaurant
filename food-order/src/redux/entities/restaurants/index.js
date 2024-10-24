import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";
import { FULFILLED, IDLE } from "../../../const/request-statuses";

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
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
      state.requestStatus = FULFILLED;
    }),
});

export const {
  selectRestaurantIds,
  selectRestaurantById,
  selectRestaurantsByIds,
  selectRestaurantsRequestStatus,
} = restaurantSlice.selectors;
