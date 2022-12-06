import useMovieStore from "./store/storeMovies.js";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useReviewStore from "./store/storeReview.js";
import Review from "./components/Reviews/Review.jsx";
import ReviewsList from "./components/ReviewsList.jsx";
import CreateReview from "./components/Reviews/CreateReview.jsx";

function App() {
  const reviews = useReviewStore((state) => state.reviews);
  const createReview = useReviewStore((state) => state.createReview);
  const updateReview = useReviewStore((state) => state.updateReview);
  const deleteReview = useReviewStore((state) => state.deleteReview);

  const addReview = (e) => {
    e.preventDefault();
    const { content } = e.currentTarget.elements;
    content.value
      ? createReview(content.value)
      : alert("Comment can't be empty");

    e.currentTarget.reset();
  };

  const updateReviewContent = (e, reviewId) => {
    e.preventDefault();
    const { content } = e.currentTarget.elements;
    content.value
      ? updateReview(reviewId, content.value)
      : alert("Comment can't be empty");
  };

  return (
    <div className="reviews-container">
      {/* <form onSubmit={addReview}>
        <input type="text" name="content" />
        <button type="submit">add review</button>
      </form>
      {reviews.map((review) => {
        return (
          <div key={review.id}>
            <div>
              <h2>Review: {review.content},</h2>
              <button onClick={() => deleteReview(review.id)}>delete</button>
            </div>
            <form onSubmit={(e) => updateReviewContent(e, review.id)}>
              <input type="text" name="content" defaultValue={review.content} />
              <button type="submit">update</button>
            </form>
          </div>
        );
      })} */}
      <ReviewsList />
      <CreateReview />
    </div>
  );
}

export default App;
