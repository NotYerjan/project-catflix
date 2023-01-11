import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { FiHeart } from "react-icons/fi";
import useReviewStore from "../store/storeReview";
import useUserStore from "../store/storeUsers";
import { useState } from "react";

export default function MovieInfo({ movie, movieReviews }) {
  const reviews = useReviewStore((state) => state.reviews);
  const currentUserMovie = useUserStore((state) => state.currentUser);
  const newMovieStatus = useUserStore((state) => state.changeMovieStatusOfUser);
  const toggleLikes = useUserStore((state) => state.toggleFavoriteMovie);
  let ckeckit, ckecyt;
  for (let m of currentUserMovie.movies) {
    if (m.id.toLowerCase() === movie.id.toLowerCase()) {
      console.log(m.isFavorite);
      ckeckit = m.isFavorite;
      ckecyt = m.status;
    }
  }

  const [statusMovie, setStatusMovie] = useState(ckecyt);
  const [likes, setLikes] = useState(ckeckit);
  // Add a comma after a string, used with arrays that have multiple values
  // (names, genres...)
  const addCommaAsSeperator = (string) => (string += ", ");
  const handleChange = (e) => {
    setStatusMovie(e.target.value);
    newMovieStatus(movie.id, e.target.value);
  };
  const makeFavurte = () => {
    setLikes(!likes);
    toggleLikes(movie.id);
  };
  const liked = {
    background: likes ? "red" : "black",
  };
  const secondStyle = {
    display: "flex",
    justifyContent: "space-around",
  };
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
          <div style={secondStyle}>
            <FiHeart style={liked} onClick={makeFavurte} />
            <FormControl width="200px">
              <InputLabel id="demo-simple-select-label">
                Give a status
              </InputLabel>
              <Select
                label=" Give a status"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
                value={statusMovie}
              >
                <MenuItem value="watching">Watching</MenuItem>
                <MenuItem value="finished">Finished</MenuItem>
                <MenuItem value="willWatch">Will Watch</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>

          <Typography
            gutterBottom
            variant="body1"
            component="div"
            sx={{ color: "rgb(227, 171, 87);" }}
          >
            IMDB:
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
