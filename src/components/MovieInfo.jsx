import React from "react";
import { Card, CardMedia, Typography, CardContent, Box } from "@mui/material";
import useReviewStore from "../store/storeReview";

export default function MovieInfo({ movie, movieReviews }) {
  const reviews = useReviewStore((state) => state.reviews);

  // Add a comma after a string, used with arrays that have multiple values
  // (names, genres...)
  const addCommaAsSeperator = (string) => (string += ", ");

  return (
    <Box maxWidth={450}>
      <Card sx={{ position: "sticky", top: 20 }}>
        <CardMedia
          component="img"
          width="100%"
          image={movie.imgSrc}
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>

          <Typography
            gutterBottom
            variant="body1"
            component="div"
            sx={{ color: "rgb(227, 171, 87);" }}
          >
            Rating:{" "}
            {(
              movieReviews.reduce((total, review) => total + review.rating, 0) /
              movieReviews.length
            ).toFixed(1)}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <div style={{ fontWeight: "bold" }}>Overview: </div>
            {movie.description}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary">
            <span style={{ fontWeight: "bold" }}>Released: </span>
            {movie.releaseDate}
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ textTransform: "capitalize" }}
          >
            <span style={{ fontWeight: "bold" }}>Country: </span>
            {movie.country}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary">
            <span style={{ fontWeight: "bold" }}>Duration: </span>{" "}
            {movie.duration} mins
          </Typography>

          <Typography variant="subtitle1" color="text.secondary">
            <span style={{ fontWeight: "bold" }}>Casts: </span>
            {movie.casts.map((cast, index) => (
              <span style={{ textTransform: "capitalize" }} key={index}>
                {index === movie.casts.length - 1
                  ? cast
                  : addCommaAsSeperator(cast)}
              </span>
            ))}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary">
            <span style={{ fontWeight: "bold" }}>Genre: </span>{" "}
            {movie.tags.map((tag, index) => (
              <span style={{ textTransform: "capitalize" }} key={index}>
                {index === movie.tags.length - 1
                  ? tag
                  : addCommaAsSeperator(tag)}
              </span>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
