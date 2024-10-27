import { Review } from "../reviews/Review";
import { ReviewForm } from "../reviews/ReviewForm";
import { Authorized } from "../authorized/Authorized";
import { useParams } from "react-router-dom";
import {
  useGetRviewsQuery,
  useGetUsersQuery,
} from "../../redux/services/api/api";
import { useAuth } from "../authContext/useAuth";

export function ReviewPage() {
  const { restaurantId } = useParams();
  const { userId } = useAuth();
  const {
    isLoading: isUsesrsLoading,
    error: usersError,
    data: users,
  } = useGetUsersQuery();
  const { isFetching, error, data } = useGetRviewsQuery(restaurantId);
  if (isUsesrsLoading) return <div>Loading reviews data...</div>;
  if (isFetching) return <div>Loading reviews...</div>;
  if (error || usersError)
    return (
      <div>
        Error: {error.message} && {usersError.message}
      </div>
    );
  const reviews = addUserToReview(data, users);
  const header = reviews.length ? "Reviews" : "No reviews";
  return (
    <>
      <h3>{header}</h3>
      {reviews.map((review) => {
        return userId === review.user?.id ? (
          <ReviewForm key={review.id} initReview={review} isEdit={true} />
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
