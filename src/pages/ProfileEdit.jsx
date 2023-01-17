import React from "react";
import useUserStore from "../store/storeUsers";
import {
  Button,
  Card,
  CardContent,
  TextField,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProfileEdit() {
  const [userInfo, setUserInfo] = useState({});
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [repeatPassword, setRepeatePassowrd] = useState("");
  const user = useUserStore((state) => state.currentUser);
  const updateCurrentUserInfo = useUserStore(
    (state) => state.updateCurrentUserInfo
  );
  const navigate = useNavigate();

  //handle save function
  const handleSave = () => {
    if (password && password === repeatPassword) {
      updateCurrentUserInfo({ password: password });
    } else if (password && password !== repeatPassword) {
      alert("Passwords don't match");
    }
    updateCurrentUserInfo(userInfo);
    if (birthday) {
      const newBirthday = new Date(birthday);
      updateCurrentUserInfo({ birthday: newBirthday });
    }
    navigate("/profile");
  };
  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          sx={{ width: "100%" }}
          disabled={true}
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
          // defaultValue={user.lastName}
          onChange={(e) =>
            setUserInfo((prev) => ({ ...prev, lastName: e.target.value }))
          }
          value={userInfo.lastName ? userInfo.lastName : user.lastName}
        />
        <TextField
          sx={{ width: "100%" }}
          id="password"
          label="New Password"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <TextField
          sx={{ width: "100%" }}
          id="repeatPassword"
          label="Repeat Password"
          variant="outlined"
          type="password"
          onChange={(e) => setRepeatePassowrd(e.target.value)}
          value={repeatPassword}
        />
        <TextField
          sx={{ width: "100%" }}
          id="birthday"
          // label="Date of Birth"
          variant="outlined"
          type="date"
          onChange={(e) => setBirthday(e.target.value)}
          value={birthday}
        />
        <TextField
          sx={{ width: "100%" }}
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          // defaultValue={user.email}
          onChange={(e) =>
            setUserInfo((prev) => ({ ...prev, email: e.target.value }))
          }
          value={userInfo.email ? userInfo.email : user.email}
        />
        <label htmlFor="imgSrc"> Avatar</label>
        <input type="image" alt="avatar" id="imgSrc" />
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" onClick={() => navigate("/profile")}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </CardActions>
    </Card>
  );
}
