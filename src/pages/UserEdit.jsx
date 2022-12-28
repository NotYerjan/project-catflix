import React from "react";
import useUserStore from "../store/storeUsers";
import {
  Button,
  Card,
  CardContent,
  TextField,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function UserEdit() {
  const [userInfo, setUserInfo] = useState({});
  const user = useUserStore((state) => state.currentUser);

  //handle save function
  const handleSave = () => {};
  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          sx={{ width: "100%" }}
          disabled="true"
          id="username"
          label="Username"
          variant="outlined"
        />
        <TextField
          sx={{ width: "100%" }}
          id="firstName"
          label="First Name"
          variant="outlined"
          // defaultValue={user.firstName}
          onChange={(e) =>
            setUserInfo((prev) => ({ ...prev, firstName: e.target.value }))
          }
          value={userInfo.firstName ? userInfo.firstName : user.firstName}
        />
        <TextField
          sx={{ width: "100%" }}
          id="lastName"
          label="Last Name"
          variant="outlined"
          defaultValue={user.lastName}
        />
        <TextField
          sx={{ width: "100%" }}
          id="password"
          label="New Password"
          variant="outlined"
          type="password"
        />
        <TextField
          sx={{ width: "100%" }}
          id="repeatPassword"
          label="Repeat Password"
          variant="outlined"
          type="password"
        />
        <TextField
          sx={{ width: "100%" }}
          id="birthday"
          // label="Date of Birth"
          variant="outlined"
          type="date"
        />
        <TextField
          sx={{ width: "100%" }}
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          defaultValue={user.email}
        />
        <label htmlFor="imgSrc"> Avatar</label>
        <input type="image" alt="avatar" id="imgSrc" />
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/user">
          <Button variant="outlined">Cancel</Button>
        </Link>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </CardActions>
    </Card>
  );
}
