import {
  Card,
  TextField,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import useReviewStore from "../../store/storeReview.js";
import { nanoid } from "nanoid";
import useMovieStore from "../../store/storeMovies.js";

export default function CreateReview({ movieId, movie }) {
  const createReview = useReviewStore((state) => state.createReview);
  const [reviewContent, setReviewContent] = useState("");
  const [reviewScore, setReviewScore] = useState(5);
  const addReviewToMovie = useMovieStore((state) => state.addReviewToMovie);

  const addReview = () => {
    const reviewId = nanoid();
    const date = new Date();

    const newReview = {
      id: reviewId,
      userId: "admin",
      createdAt: `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`,
      score: reviewScore,
      content: reviewContent,
    };

    if (reviewContent) {
      console.log(reviewId, movieId);
      createReview(newReview);
      addReviewToMovie(movieId, reviewId);
      setReviewContent("");
      console.log(movie.reviewIds);
    } else {
      alert("Comment can't be empty");
    }
  };

  return (
    <Card elevation={6}>
      <CardContent>
        <TextField
          label="Review"
          helperText="Please write your review here"
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
        sx={{ display: "flex", justifyContent: "center", padding: 2, pt: 0 }}
      >
        <Button variant="contained" onClick={addReview}>
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
