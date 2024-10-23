import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from ".";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/restaurants");
    const result = await response.json();
    console.log("requesting restaurantS...");
    if (!result.length) {
      rejectWithValue("no data");
      return;
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectRestaurantIds(getState()).length === 0;
    },
  }
);

export const getRestaurantById = createAsyncThunk(
  "restaurant/getRestaurantById",
  async (restaurantId, thunkAPI) => {
    const response = await fetch(
      `http://localhost:3001/api/restaurant/${restaurantId}`
    );
    console.log("requesting restaurant...");
    const result = await response.json();
    if (!result.length) {
      thunkAPI.rejectWithValue("no data");
      return;
    }
    return result;
  }
);
