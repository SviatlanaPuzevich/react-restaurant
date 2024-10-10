import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../const/normalized-mock";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    entities: normalizedRestaurants.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {}),
    ids: normalizedRestaurants.map(({ id }) => {
      return id;
    }),
  },
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantsByIds: (state, ids) => ids.map((id) => state.entities[id]),
  },
});

export const {
  selectRestaurantIds,
  selectRestaurantById,
  selectRestaurantsByIds,
} = restaurantSlice.selectors;
