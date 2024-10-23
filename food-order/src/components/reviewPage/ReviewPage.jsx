import { useSelector } from "react-redux";
import { Review } from "../reviews/Review";
import { ReviewForm } from "../reviews/ReviewForm";
import { Authorized } from "../authorized/Authorized";
import { useParams } from "react-router-dom";
import { getReviews } from "../../redux/entities/reviews/get-reviews";
import { selectReviews } from "../../redux/entities/reviews";
import { getUsers } from "../../redux/entities/users/get-users";
import { PENDING } from "../../const/request-statuses";
import { useRequestStatus } from "../../redux/ui/request/use-request";

export function ReviewPage() {
  const { restaurantId } = useParams();
  const reviewRequestStatus = useRequestStatus(getReviews, restaurantId);
  const usersRequestStatus = useRequestStatus(getUsers);
  const reviews = useSelector(selectReviews);

  if (reviewRequestStatus === PENDING) {
    return "reviews are loading";
  }
  if (usersRequestStatus === PENDING) {
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
