import { CardMedia, Grid, Paper, Rating, Typography } from "@mui/material";
import useMovieStore from "../../store/storeMovies";
import { Link } from "react-router-dom";

export default function UserActivity({ user, userReviews }) {
  const movies = useMovieStore((state) => state.movies);
  const userMovies = user.movies?.map((movie) => {
    const movieInfo = movies.find(({ id }) => id === movie.id);
    return { ...movie, ...movieInfo };
  });
  const userReviedMovies = userReviews?.map((review) => {
    const { id, imgSrc, title, releaseDate } = movies.find(({ reviewIds }) =>
      reviewIds.includes(review.id)
    );
    return { ...review, id, imgSrc, title, releaseDate };
  });

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
      <Typography variant="h4">Reviews & Ratings</Typography>{" "}
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "start", gap: "1rem" }}
      >
        {userReviedMovies?.map((movie) => (
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              textAlign: "center",
            }}
            item
            xs={12}
            sm={5}
            md={2.5}
            key={movie.id}
          >
            <Link to={`/movies/${movie.id}`}>
              <CardMedia
                component="img"
                image={movie.imgSrc}
                alt={movie.title}
              />
            </Link>
            <Typography variant="h6">
              {movie.title}
              <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                ({movie.releaseDate.split(", ")[1]})
              </span>
            </Typography>
            <Rating
              name="read-only"
              value={movie.rating}
              sx={{ marginTop: "0.7rem" }}
              readOnly
            />
            <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
              {movie.createdAt}
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                display: "-webkit-box",
                WebkitLineClamp: "7",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
              color="text.secondary"
            >
              {movie.content}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <hr />
      <Typography variant="h4">Favorites</Typography>{" "}
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "start", gap: "1rem" }}
      >
        {userMovies?.map(
          ({ id, title, imgSrc, releaseDate, isFavorite }) =>
            isFavorite && (
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
                item
                xs={12}
                sm={5}
                md={2.5}
                key={id}
              >
                <Link to={`/movies/${id}`}>
                  <CardMedia component="img" image={imgSrc} alt={title} />
                </Link>
                <Typography variant="h6">
                  {title}{" "}
                  <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                    ({releaseDate.split(", ")[1]})
                  </span>
                </Typography>
              </Grid>
            )
        )}
      </Grid>
      <hr />
      <Typography variant="h4">Currently Watching</Typography>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "start", gap: "1rem" }}
      >
        {userMovies?.map(
          ({ id, title, imgSrc, releaseDate, status }) =>
            status === "watching" && (
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
                item
                xs={12}
                sm={5}
                md={2.5}
                key={id}
              >
                <Link to={`/movies/${id}`}>
                  <CardMedia component="img" image={imgSrc} alt={title} />
                </Link>
                <Typography variant="h6">
                  {title}{" "}
                  <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                    ({releaseDate.split(", ")[1]})
                  </span>
                </Typography>
              </Grid>
            )
        )}
      </Grid>
      <hr />
      <Typography variant="h4">Watched</Typography>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "start", gap: "1rem" }}
      >
        {userMovies?.map(
          ({ id, title, imgSrc, releaseDate, status }) =>
            status === "finished" && (
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
                item
                xs={12}
                sm={5}
                md={2.5}
                key={id}
              >
                <Link to={`/movies/${id}`}>
                  <CardMedia component="img" image={imgSrc} alt={title} />
                </Link>
                <Typography variant="h6">
                  {title}{" "}
                  <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                    ({releaseDate.split(", ")[1]})
                  </span>
                </Typography>
              </Grid>
            )
        )}
      </Grid>
    </Paper>
  );
}
