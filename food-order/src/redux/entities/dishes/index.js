import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishById, getDishes } from "./get-dishes";
import { FULFILLED, IDLE } from "../../../const/request-statuses";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState({
    requestStatus: IDLE,
    error: null,
  }),
  selectors: {
    selectDishById: (state, id) => state.entities[id],
    selectDishesIds: (state) => state.ids,
    selectMenu: (state) => Object.values(state.entities),
    selectDishesRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        entityAdapter.addOne(state, payload);
        state.requestStatus = FULFILLED;
      }),
});

export const {
  selectDishById,
  selectDishesIds,
  selectDishesRequestStatus,
  selectMenu,
} = dishesSlice.selectors;
