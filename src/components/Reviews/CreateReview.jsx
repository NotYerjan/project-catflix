import React from "react";
import useReviewStore from "../../store/storeReview.js";
import './review.css'

export default function CreateReview() {
  const createReview = useReviewStore((state) => state.createReview);

  const addReview = (e) => {
    e.preventDefault();
    const { review } = e.currentTarget.elements;
    review.value
      ? createReview(review.value)
      : alert("Comment can't be empty");

    e.currentTarget.reset();
  };

  return (
    <form className="review-add" onSubmit={addReview}>
        <textarea type="text" name="review" placeholder="Add a review..."></textarea>
        <button type="submit">Add</button>
    </form>
  );
}
