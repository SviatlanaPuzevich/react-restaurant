import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviews } from ".";

export const getReviews = createAsyncThunk(
  "rviews/getReviews",
  async (restaurantId, thunkAPI) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    if (!result.length) {
      thunkAPI.rejectWithValue("no reviews");
      return;
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectReviews(getState()).length === 0;
    },
  }
);
