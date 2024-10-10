import { Review } from "./Review";
import { ReviewForm } from "./ReviewForm";
import { Authorized } from "../authorized/Authorized";

export function Reviews({ ids }) {
  const header = ids.length ? "Reviews" : "No reviews";
  console.log(ids);
  return (
    <>
      <h3>{header}</h3>
      {ids.map((id) => (
        <Review key={id} id={id} />
      ))}
      <Authorized>
        <ReviewForm />
      </Authorized>
    </>
  );
}
