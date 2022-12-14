import React from "react";
import {
  Avatar,
  List,
  ListItem,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import useUserStore from "../store/storeUsers";
import { Link } from "react-router-dom";

function User() {
  const user = useUserStore((state) => state.currentUser);

  return (
    <div>
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
                {user.birthday.toDateString()}
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
      <Link to="/user/edit">
        <Button variant="outlined">Edit Info</Button>
      </Link>
    </div>
  );
}

export default User;
