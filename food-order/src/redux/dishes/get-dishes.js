import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    if (!response.ok) {
      return rejectWithValue("Error fetching dishes data");
    }
    return result;
  }
);

export const getDishById = createAsyncThunk(
  "dish/getDishById",
  async (dishId, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
    const result = await response.json();
    if (!response.ok) {
      return rejectWithValue("Error fetching dish data");
    }
    return result;
  }
);
