import React from "react";
import {
  Avatar,
  List,
  ListItem,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import useUserStore from "../store/storeUsers";

import { useNavigate } from "react-router-dom";
import useReviewStore from "../store/storeReview";
import useMovieStore from "../store/storeMovies";

function Profile() {
  const user = useUserStore((state) => state.currentUser);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const birthday = isLoggedIn ? new Date(user.birthday) : "";
  const reviews = useReviewStore((state) => state.reviews);
  const movies = useMovieStore((state) => state.movies);
  const removeReviewFromMovie = useMovieStore(
    (state) => state.removeReviewFromMovie
  );
  const deleteAllReviewsOfUser = useReviewStore(
    (state) => state.deleteAllReviewsOfUser
  );
  const navigate = useNavigate();
  const deleteAndLogoutUser = useUserStore(
    (state) => state.deleteAndLogoutUser
  );

  const handelDeleteUser = async () => {
    try {
      await reviews
        .filter((review) => review.userId === user.id)
        .map((review) => {
          const movie = movies.find((movie) =>
            movie.reviewIds.includes(review.id)
          );
          removeReviewFromMovie(movie.id, review.id);
        });
      await deleteAllReviewsOfUser(user.id);
      deleteAndLogoutUser();
    } catch {
      console.log("something went wrong");
    }
  };

  return (
    <>
      {isLoggedIn && (
        <>
          <List>
            <ListItem sx={{ justifyContent: "center" }}>
              <Avatar
                alt="Remy Sharp"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                sx={{ width: 100, height: 100 }}
              />
            </ListItem>
            <ListItem disablePadding>
              <Card sx={{ width: "100%" }} variant="outlined">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Username:
                  </Typography>
                  <Typography variant="h5" component="div">
                    {user.username}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
            <ListItem disablePadding>
              <Card sx={{ width: "100%" }} variant="outlined">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    First Name:
                  </Typography>
                  <Typography variant="h5" component="div">
                    {user.firstName}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
            <ListItem disablePadding>
              <Card sx={{ width: "100%" }} variant="outlined">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Last Name:
                  </Typography>
                  <Typography variant="h5" component="div">
                    {user.lastName}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
            <ListItem disablePadding>
              <Card sx={{ width: "100%" }} variant="outlined">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Date of Birth:
                  </Typography>
                  <Typography variant="h5" component="div">
                    {birthday.toLocaleString("en-CA", {
                      dateStyle: "medium",
                    })}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
            <ListItem disablePadding>
              <Card sx={{ width: "100%" }} variant="outlined">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Email:
                  </Typography>
                  <Typography variant="h5" component="div">
                    {user.email}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
          </List>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="outlined"
              onClick={() => navigate("/profile/edit")}
            >
              Edit Info
            </Button>

            <Button variant="outlined" onClick={handelDeleteUser}>
              Delete Account
            </Button>
          </Box>
        </>
      )}
    </>
  );
}

export default Profile;
