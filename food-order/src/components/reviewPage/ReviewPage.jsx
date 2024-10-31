"use client";

import { Review } from "../reviews/Review";
import { ReviewForm } from "../reviews/ReviewForm";
import { Authorized } from "../authorized/Authorized";
import { useAuth } from "../authContext/useAuth";
import { EditableReview } from "../reviews/EditableReview";

export function ReviewPage({ reviews, users, restaurantId }) {
  const { userId } = useAuth();
  const reviewsWithUsers = addUserToReview(reviews, users);
  const header = reviews.length ? "Reviews" : "No reviews";
  return (
    <>
      <h3>{header}</h3>
      {reviewsWithUsers.map((review) => {
        return userId === review.user?.id ? (
          <EditableReview key={review.id} review={review} />
        ) : (
          <Review key={review.id} review={review} />
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
