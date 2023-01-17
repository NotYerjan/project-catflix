import React from "react";
import Review from "./Review";
import CreateReview from "./CreateReview.jsx";
import { Paper, Typography } from "@mui/material";
import useUserStore from "../../store/storeUsers.js";

export default function ReviewsList({ movie, movieReviews }) {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

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
      {isLoggedIn && <CreateReview movieId={movie.id} movie={movie} />}
    </Paper>
  );
}
