export function Review ({review}) {
    return (
        <div className="review">
        <div key={review.id}>{review.text}</div>
        <div className="review--rating">{review.rating}</div>
        </div>
    );
}