import { ReviewPage } from "../../../../components/reviewPage/ReviewPage";
import { getReviews } from "../../../services/get-reviews";
import { getUsers } from "../../../services/get-users";

export default async function ReviewsPage({ params }) {
  const { restaurantId } = await params;
  const reviews = await getReviews(restaurantId);
  const users = await getUsers();
  return (
    <ReviewPage reviews={reviews} restaurantId={restaurantId} users={users} />
  );
}
