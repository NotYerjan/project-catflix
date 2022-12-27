import {
  Card,
  TextField,
  CardContent,
  CardActions,
  Button,
  Rating,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import useReviewStore from "../../store/storeReview.js";
import { nanoid } from "nanoid";
import useMovieStore from "../../store/storeMovies.js";

export default function CreateReview({ movieId, movie }) {
  const [reviewContent, setReviewContent] = useState("");
  const [reviewScore, setReviewScore] = useState(5);
  const [rating, setRating] = useState(0);

  const createReview = useReviewStore((state) => state.createReview);
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
      score: rating,
      content: reviewContent,
    };

    if (reviewContent) {
      console.log(reviewId, movieId);
      createReview(newReview);
      addReviewToMovie(movieId, reviewId);
      setReviewContent("");
      setRating(0);
      console.log(movie.reviewIds);
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
          justifyContent: "space-around",
          padding: 2,
          pt: 0,
        }}
      >
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(e) => {
            console.log(e.target.value);
            setRating(e.target.value);
          }}
        />
        <Button variant="contained" onClick={addReview}>
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
