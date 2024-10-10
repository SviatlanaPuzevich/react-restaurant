import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./restaurants";
import { reviewsSlice } from "./reviews";
import { dishesSlice } from "./dishes";
import { usersSlice } from "./users";

export const store= configureStore( {
    reducer: {
        [restaurantSlice.name] : restaurantSlice.reducer,
        [reviewsSlice.name]: reviewsSlice.reducer,
        [dishesSlice.name]: dishesSlice.reducer,
        [usersSlice.name] : usersSlice.reducer
    }
});