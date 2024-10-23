import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurants";
import { reviewsSlice } from "./entities/reviews";
import { dishesSlice } from "./entities/dishes";
import { usersSlice } from "./entities/users";
import { cartSlice } from "./ui/cart";
import { requestSlice } from "./ui/request";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [restaurantSlice.name]: restaurantSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
});
