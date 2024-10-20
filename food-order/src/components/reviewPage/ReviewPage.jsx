import { useDispatch, useSelector } from "react-redux";
import { Review } from "../reviews/Review";
import { ReviewForm } from "../reviews/ReviewForm";
import { Authorized } from "../authorized/Authorized";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getReviews } from "../../redux/reviews/get-reviews";
import { selectReviewRequestStatus, selectReviews } from "../../redux/reviews";
import { getUsers } from "../../redux/users/get-users";
import { selectUsersRequestStatus } from "../../redux/users";
import { IDLE, PENDING } from "../../const/request-statuses";

export function ReviewPage() {
  const { restaurantId } = useParams();
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getReviews(restaurantId));
    dispath(getUsers());
  }, [dispath, restaurantId]);
  const reviewRequestStatus = useSelector(selectReviewRequestStatus);
  const usersRequestStatus = useSelector(selectUsersRequestStatus);
  const reviews = useSelector(selectReviews);

  if (reviewRequestStatus === IDLE || reviewRequestStatus === PENDING) {
    return "reviews are loading";
  }
  if (usersRequestStatus === IDLE || usersRequestStatus === PENDING) {
    return "users are loading";
  }

  const header = reviews.length ? "Reviews" : "No reviews";
  return (
    <>
      <h3>{header}</h3>
      {reviews.map((review) => {
        return <Review key={review.id} review={review} />;
      })}
      <Authorized>
        <ReviewForm />
      </Authorized>
    </>
  );
}
