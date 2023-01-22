import React from "react";
import {
  Card,
  CardMedia,
  CardHeader,
  Typography,
  CardContent,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useUserStore from "../../store/storeUsers";
import { useState } from "react";

export default function MovieInfo({ movie, movieReviews }) {
  const user = useUserStore((state) => state.currentUser);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const newMovieStatus = useUserStore((state) => state.changeMovieStatusOfUser);
  const toggleFavorite = useUserStore((state) => state.toggleFavoriteMovie);
  const userMovieState = user?.movies?.find(({ id }) => id == movie.id);

  const [statusMovie, setStatusMovie] = useState(
    userMovieState?.status || "none"
  );
  // Add a comma after a string, used with arrays that have multiple values
  // (names, genres...)
  const addCommaAsSeperator = (string) => (string += ", ");
  const handleChange = (e) => {
    setStatusMovie(e.target.value);
    newMovieStatus(movie.id, e.target.value);
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
        <CardHeader
          action={
            isLoggedIn && (
              <>
                <IconButton onClick={() => toggleFavorite(movie.id)}>
                  {userMovieState?.isFavorite ? (
                    <FaHeart color="red" />
                  ) : (
                    <FaRegHeart />
                  )}
                </IconButton>

                <FormControl size="small">
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    label="Status"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleChange}
                    value={statusMovie}
                  >
                    <MenuItem value="none">Select</MenuItem>
                    <MenuItem value="watching">Watching</MenuItem>
                    <MenuItem value="finished">Finished</MenuItem>
                    <MenuItem value="willWatch">Will Watch</MenuItem>
                  </Select>
                </FormControl>
              </>
            )
          }
          title={movie.title}
          subheader={
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              sx={{ color: "rgb(227, 171, 87);" }}
            >
              IMDB:
              {(
                movieReviews.reduce(
                  (total, review) => total + review.rating,
                  0
                ) / movieReviews.length
              ).toFixed(1) || "There is no review yet"}
            </Typography>
          }
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            <span style={{ fontWeight: "bold" }}>Overview: </span>
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
