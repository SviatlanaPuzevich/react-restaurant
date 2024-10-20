import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishById, getDishes } from "./get-dishes";
import {
  FULFILLED,
  IDLE,
  PENDING,
  REJECTED,
} from "../../const/request-statuses";

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
      .addCase(getDishes.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getDishes.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
      .addCase(getDishById.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        entityAdapter.addOne(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getDishById.rejected, (state) => {
        state.requestStatus = REJECTED;
      }),
});

export const {
  selectDishById,
  selectDishesIds,
  selectDishesRequestStatus,
  selectMenu,
} = dishesSlice.selectors;
