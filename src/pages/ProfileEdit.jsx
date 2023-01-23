import React from "react";
import useUserStore from "../store/storeUsers";
import {
  Button,
  Card,
  CardContent,
  TextField,
  CardActions,
  Avatar,
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

  const [userAvatar, setUserAvatar] = useState({
    avatar: null,
    avatarPreview: user.imgSrc,
  });

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

  const handleUserAvatarUpload = () => {
    const data = new FormData();

    data.append("file", userAvatar.avatar);
    data.append("upload_preset", "xts9tly0");
    data.append("cloud_name", "df9xmfkp1");

    fetch("https://api.cloudinary.com/v1_1/df9xmfkp1/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        updateCurrentUserInfo({
          imgSrc: data.secure_url,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }}>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={userAvatar.avatarPreview}
          sx={{ width: 100, height: 100 }}
        />
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Button variant="contained" component="label">
            Upload
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              name="user_avatar"
              onChange={(e) =>
                setUserAvatar({
                  ...userAvatar,
                  avatar: e.target.files[0],
                  avatarPreview: URL.createObjectURL(e.target.files[0]),
                })
              }
            />
          </Button>
          <Button
            variant="contained"
            component="label"
            onClick={handleUserAvatarUpload}
          >
            Save
          </Button>
        </div>
      </div>
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
