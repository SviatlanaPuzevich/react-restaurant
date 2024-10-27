import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Review"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({ query: () => "/restaurants" }),
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
    }),
    getDishes: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getDishById: builder.query({
      query: (dishId) => `dish/${dishId}`,
    }),
    getRviews: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: (id) => [{ type: "Review", id }],
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        method: "POST",
        body: review,
        url: `/review/${restaurantId}`,
      }),
      invalidatesTags: ({ restaurantId }) => [
        { type: "Review", id: restaurantId },
      ],
    }),
    editReview: builder.mutation({
      query: ({ reviewId, review }) => ({
        method: "PATCH",
        body: review,
        url: `/review/${reviewId}`,
      }),
      invalidatesTags: ({ reviewId }) => [{ type: "Review", id: reviewId }],
    }),
    getUsers: builder.query({ query: () => "/users" }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetDishByIdQuery,
  useGetDishesQuery,
  useGetRviewsQuery,
  useAddReviewMutation,
  useEditReviewMutation,
  useGetUsersQuery,
} = apiSlice;
