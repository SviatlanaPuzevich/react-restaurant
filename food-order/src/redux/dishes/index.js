import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../const/normalized-mock";

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: {
    entities: normalizedDishes.reduce((acc, dish) => {
      acc[dish.id] = dish;
      return acc;
    }, {}),
  },
  selectors: {
    selectDishById: (state, id) => state.entities[id],
  },
});

export const { selectDishById } = dishesSlice.selectors;
