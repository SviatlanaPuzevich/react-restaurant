import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants";
import { Review } from "../reviews/Review";
import { ReviewForm } from "../reviews/ReviewForm";
import { Authorized } from "../authorized/Authorized";
import { useParams } from "react-router-dom";

export function ReviewPage() {
  const { restaurantId } = useParams();
  const { reviews } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const header = reviews.length ? "Reviews" : "No reviews";
  return (
    <>
      <h3>{header}</h3>
      {reviews.map((id) => {
        return <Review key={id} id={id} />;
      })}
      <Authorized>
        <ReviewForm />
      </Authorized>
    </>
  );
}
