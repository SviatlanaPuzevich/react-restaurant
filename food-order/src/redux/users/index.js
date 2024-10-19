import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../const/normalized-mock";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: normalizedUsers.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {}),
  },
  selectors: {
    selectUserById: (state, id) => state.entities[id],
  },
});

export const { selectUserById } = usersSlice.selectors;
