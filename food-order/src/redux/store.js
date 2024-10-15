import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./restaurants";
import { reviewsSlice } from "./reviews";
import { dishesSlice } from "./dishes";
import { usersSlice } from "./users";
import { cartSlice } from "./cart";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [restaurantSlice.name]: restaurantSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
  },
});
