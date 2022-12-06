import React, { useEffect } from "react";
import useReviewStore from "../store/storeReview.js";
import Review from "./Reviews/Review";

export default function ReviewsList() {
  const reviews = useReviewStore((state) => state.reviews);
  // let limit = -2;

  /*   const renderReviews = () => {
    return reviews
      .slice(limit)
      .map((review) => <Review key={review.id} content={review} />);
  }; */

  /*   useEffect(() => {
    console.log(limit);
    //renderReviews();
  }, [limit]); */

  return (
    <div className="reviews-list" id="container">
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <Review key={review.id} content={review} />
      ))}
      {/* <button onClick={() => renderReviews()}>Render</button>
      <button onClick={() => limit = limit-1}>Show More..</button> */}
    </div>
  );
}
