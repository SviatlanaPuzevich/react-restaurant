import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Review", "Restaurant"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({ query: () => "/restaurants" }),
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
      providesTags: (result, error, restaurantId) => [
        { type: "Restaurant", restaurantId },
      ],
    }),
    getDishes: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getDishById: builder.query({
      query: (dishId) => `dish/${dishId}`,
    }),
    getReviews: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: (result, error, id) => [{ type: "Review", id }],
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        method: "POST",
        body: review,
        url: `/review/${restaurantId}`,
      }),
      invalidatesTags: (response, error, { restaurantId }) => {
        return [
          { type: "Review", id: restaurantId },
          { type: "Restaurant", id: restaurantId },
        ];
      },
    }),
    editReview: builder.mutation({
      query: ({ reviewId, review, restaurantId }) => ({
        method: "PATCH",
        body: review,
        url: `/review/${reviewId}`,
      }),
      invalidatesTags: (result, error, { restaurantId }) => [
        { type: "Review", id: restaurantId },
        { type: "Restaurant", id: restaurantId },
      ],
    }),
    getUsers: builder.query({ query: () => "/users" }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetDishByIdQuery,
  useGetDishesQuery,
  useGetReviewsQuery,
  useAddReviewMutation,
  useEditReviewMutation,
  useGetUsersQuery,
} = apiSlice;
