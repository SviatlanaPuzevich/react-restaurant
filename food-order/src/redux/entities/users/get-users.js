import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUsers } from ".";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    console.log("requesting users...");
    const response = await fetch("http://localhost:3001/api/users");
    const result = await response.json();
    if (!result.length) {
      rejectWithValue("no users");
      return;
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectUsers(getState()).length === 0;
    },
  }
);
