import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";
import {
  FULFILLED,
  IDLE,
  PENDING,
  REJECTED,
} from "../../const/request-statuses";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState({ requestStatus: IDLE }),
  selectors: {
    selectUserById: (state, id) => state.entities[id],
    selectUsers: (state) => Object.values(state.entities),
    selectUsersRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = FULFILLED;
      })
      .addCase(getUsers.rejected, (state) => {
        state.requestStatus = REJECTED;
      }),
});

export const { selectUserById, selectUsers, selectUsersRequestStatus } =
  usersSlice.selectors;
