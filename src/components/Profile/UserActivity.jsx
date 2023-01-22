import { CardMedia, Grid, Paper, Rating, Typography } from "@mui/material";
import useMovieStore from "../../store/storeMovies";
import { Link } from "react-router-dom";
import UserReviewCard from "../List/UserReviewCard";
import UserMovieCard from "../List/UserMovieCard";
export default function UserActivity({ user, userReviews }) {
  const movies = useMovieStore((state) => state.movies);
  const userMovies = user.movies?.map((movie) => {
    const movieInfo = movies.find(({ id }) => id === movie.id);
    return { ...movie, ...movieInfo };
  });
  const userReviewMovies = userReviews?.map((review) => {
    const { id, imgSrc, title, releaseDate } = movies.find(({ reviewIds }) =>
      reviewIds.includes(review.id)
    );
    return { ...review, id, imgSrc, title, releaseDate };
  });
  const userFavoriteMovies = userMovies?.filter(({ isFavorite }) => isFavorite);
  const userWatchingMovies = userMovies?.filter(
    ({ status }) => status === "watching"
  );
  const userFinishedMovies = userMovies?.filter(
    ({ status }) => status === "finished"
  );

  return (
    <Paper
      sx={{
        flex: 1,
        minWidth: 250,
        padding: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {!!userReviewMovies.length && (
        <>
          <Typography variant="h4">Reviews & Ratings</Typography>
          {userReviewMovies?.map((movie) => (
            <UserReviewCard key={movie.id} movie={movie} />
          ))}
        </>
      )}

      {!!userFavoriteMovies?.length && (
        <>
          <Typography variant="h4">Favorites</Typography>
          {userFavoriteMovies.map((movie) => (
            <UserMovieCard key={movie.id} movie={movie} />
          ))}
        </>
      )}
      {!!userWatchingMovies?.length && (
        <>
          <Typography variant="h4">Currently Watching</Typography>
          {userWatchingMovies.map((movie) => (
            <UserMovieCard key={movie.id} movie={movie} />
          ))}
        </>
      )}
      {!!userFinishedMovies?.length && (
        <>
          <Typography variant="h4">Watched</Typography>
          {userFinishedMovies.map((movie) => (
            <UserMovieCard key={movie.id} movie={movie} />
          ))}
        </>
      )}
    </Paper>
  );
}
