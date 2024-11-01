"use client";

import { Review } from "../reviews/Review";
import { ReviewForm } from "../reviews/ReviewForm";
import { useMemo } from "react";


export function ReviewPage({ reviews, users, restaurantId }) {
  const reviewsWithUsers = useMemo(() => {
    return addUserToReview(reviews, users);
  }, [reviews, users]);
  const header = reviews.length ? "Reviews" : "No reviews";

  return (
    <>
      <h3>{header}</h3>
      {reviewsWithUsers.map((review) => {
        return (
          <Review key={review.id} review={review} restaurantId={restaurantId} />
        );
      })}
      <Authorized>
        <ReviewForm restaurantId={restaurantId} />
      </Authorized>
    </>
  );
}

function addUserToReview(reviews, users) {
  const usersMap = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
  return reviews.map((review) => {
    const user = usersMap[review.userId] || null;
    return { ...review, user };
  });
}
