import React, { useState } from "react";
import { nanoid } from "nanoid";
import {
  Card,
  TextField,
  CardContent,
  CardActions,
  Button,
  Rating,
} from "@mui/material";
import useReviewStore from "../../store/storeReview.js";
import useMovieStore from "../../store/storeMovies.js";
import useUserStore from "../../store/storeUsers.js";

export default function CreateReview({ movieId, movie }) {
  const [reviewContent, setReviewContent] = useState("");
  const [rating, setRating] = useState(0);

  const createReview = useReviewStore((state) => state.createReview);
  const addReviewToMovie = useMovieStore((state) => state.addReviewToMovie);
  const user = useUserStore((state) => state.currentUser);

  const addReview = () => {
    const reviewId = nanoid();
    const date = new Date();

    const newReview = {
      id: reviewId,
      userId: user.id,
      createdAt: date,
      rating: rating,
      content: reviewContent,
    };

    if (reviewContent) {
      createReview(newReview);
      addReviewToMovie(movieId, reviewId);

      setReviewContent("");
      setRating(0);
    } else {
      alert("Comment can't be empty");
    }
  };

  return (
    <Card elevation={6}>
      <CardContent>
        <TextField
          label="New review"
          multiline
          rows={4}
          value={reviewContent}
          onChange={(e) => setReviewContent(e.target.value)}
          sx={{
            width: "100%",
          }}
        />
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 2,
          pt: 0,
        }}
      >
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(e, newValue) => {
            setRating(newValue);
          }}
        />
        <Button variant="contained" onClick={addReview}>
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
