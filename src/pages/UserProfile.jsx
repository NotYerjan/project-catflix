import React, { useState, useEffect } from "react";
import {
  Avatar,
  Card,
  CardMedia,
  Button,
  Container,
  Grid,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import useMovieStore from "../store/storeMovies";
import useReviewStore from "../store/storeReview.js";
import { Link, useParams } from "react-router-dom";
import useUserStore from "../store/storeUsers";

function UserProfile() {
  const currentUser = useUserStore((state) => state.currentUser);
  const makeUserSuper = useUserStore((state) => state.makeUserSuper);
  const { id } = useParams();

  const reviews = useReviewStore((state) => state.reviews);
  const movies = useMovieStore((state) => state.movies);
  const users = useUserStore((state) => state.users);

  const user = users.find((user) => user.id === id);

  const [userReviews, setUserReviews] = useState([]);
  const [userMovies, setUserMovies] = useState([]);

  const [membership, setMembership] = useState(
    new Date().getFullYear() - user.createdAt.split(", ")[1]
  );

  console.log(new Date().getFullYear());

  const findUserReviews = () =>
    reviews.map((review) => {
      if (
        review.userId === user.id &&
        !userReviews.find((user) => review.userId === user.userId)
      ) {
        const movieInfo = movies.filter((movie) =>
          movie.reviewIds.find((id) => id === review.id)
        );

        const { id, userId, content, createdAt, rating } = review;
        const { id: movieId, imgSrc, title, releaseDate } = movieInfo[0];

        setUserReviews((r) => [
          ...r,
          {
            id,
            userId,
            movieId,
            content,
            createdAt,
            rating,
            imgSrc,
            title,
            releaseDate,
          },
        ]);
      }
    });

  const findMovies = () =>
    user.movies?.map((movie) => {
      if (
        movies.find((m) => m.id === movie.id) &&
        !userMovies.find((user) => movie.id === user.id)
      ) {
        const movieInfo = movies.findIndex((m) => m.id === movie.id);

        //console.log(movies[movieInfo]);

        const { id, status, isFavorite } = movie;
        const { title, imgSrc, releaseDate } = movies[movieInfo];

        setUserMovies((m) => [
          ...m,
          { id, title, imgSrc, releaseDate, status, isFavorite },
        ]);
      }
    });

  findUserReviews();
  findMovies();

  return (
    <div>
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
        <Container
          sx={{
            display: "flex",
            position: "relative",
            height: { xs: "10rem" },
          }}
        >
          <Avatar
            sx={{
              width: { xs: "5rem", sm: "8rem", md: "10rem" },
              height: { xs: "5rem", sm: "8rem", md: "10rem" },
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "2rem",
            }}
          >
            <Typography variant="h4">
              {user.username} {user.isSuperUser && <span>(moderator)</span>}
            </Typography>
            {currentUser?.isSuperUser && !user.isSuperUser && (
              <Button onClick={() => makeUserSuper(user.id)}>
                Make Moderator
              </Button>
            )}
            <Typography sx={{ fontSize: "1rem" }} color="text.secondary">
              Member in Catlfix since {user.createdAt.split(", ")[1]}
            </Typography>
          </div>
          <Container
            sx={{
              display: "flex",
              gap: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: { xs: 170, sm: 200 },
              width: "10rem",
            }}
          >
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <Avatar
                sx={{
                  fontSize: "2rem",
                  bgcolor: "rgb(227, 171, 87)",
                  width: 56,
                  height: 56,
                }}
              >
                {membership}
              </Avatar>
              <Typography variant="body1">Years of Membership</Typography>
            </div>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              <Avatar
                sx={{
                  fontSize: "2rem",
                  bgcolor: "rgb(229, 201, 159)",
                  width: 56,
                  height: 56,
                }}
              >
                {userReviews.length}
              </Avatar>
              <Typography variant="body1">Reviews Added</Typography>
            </div>
          </Container>
        </Container>
        <hr />
        <Typography variant="h4">Reviews & Ratings</Typography>{" "}
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "start", gap: "1rem" }}
        >
          {" "}
          {userReviews?.map((review) => (
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
              key={review.id}
            >
              <Link to={`/movies/${review.movieId}`}>
                <CardMedia
                  component="img"
                  image={review.imgSrc}
                  alt={review.title}
                />
              </Link>
              <Typography variant="h6">
                {review.title}{" "}
                <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                  ({review.releaseDate.split(", ")[1]})
                </span>
              </Typography>{" "}
              <Rating
                name="read-only"
                value={review.rating}
                sx={{ marginTop: "0.7rem" }}
                readOnly
              />
              <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                {review.createdAt}
              </Typography>{" "}
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
                {review.content}
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
    </div>
  );
}

export default UserProfile;
