import { Review } from "../reviews/Review";
import { ReviewForm } from "../reviews/ReviewForm";
import { Authorized } from "../authorized/Authorized";
import { useParams } from "react-router-dom";
import {
  useGetReviewsQuery,
  useGetUsersQuery,
} from "../../redux/services/api/api";
import { useMemo } from "react";

export function ReviewPage() {
  const { restaurantId } = useParams();
  const { isFetching, error, data: reviews } = useGetReviewsQuery(restaurantId);
  const {
    isLoading: isUsesrsLoading,
    error: usersError,
    data: users,
  } = useGetUsersQuery();

  const reviewsWithUsers = useMemo(() => {
    if (isFetching || isUsesrsLoading) {
      return [];
    }
    return addUserToReview(reviews, users);
  }, [isFetching, isUsesrsLoading, reviews, users]);

  if (isFetching) return <div>Loading reviews...</div>;
  if (error || usersError)
    return (
      <div>
        Error: {error.message} && {usersError.message}
      </div>
    );
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
