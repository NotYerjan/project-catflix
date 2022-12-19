import React from "react";
import useReviewStore from "../store/storeReview.js";
import Review from "./Reviews/Review";
import CreateReview from "./Reviews/CreateReview.jsx";
import { Box, Paper, Typography } from "@mui/material";

export default function ReviewsList({ movie }) {
  const reviews = useReviewStore((state) => state.reviews);
  const movieReviews = reviews.filter((review) =>
    movie.reviewIds.includes(review.id)
  );

  return (
    <Paper
      sx={{
        flex: 1,
        minWidth: 250,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h4">Reviews</Typography>
      {movieReviews.map((review) => (
        <Review key={review.id} content={review} />
      ))}
      <CreateReview movieId={movie.id} movie={movie} />
    </Paper>
  );
}
