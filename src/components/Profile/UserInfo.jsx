import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import useUserStore from "../../store/storeUsers";
import ProfileActions from "./ProfileActions";
import ProfileInfoList from "./ProfileInfoList";

export default function UserInfo({ user, userReviewsLength }) {
  // const { id } = useParams();
  // const users = useUserStore((state) => state.users);
  const currentUser = useUserStore((state) => state.currentUser);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  // const user = users.find((user) => user.id === id);
  const isCurrentUser = isLoggedIn && currentUser.id === user.id;
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: { xs: "100%", sm: 300 }, width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
        <Avatar
          alt="avatar"
          src={
            user.imgSrc
              ? user.imgSrc
              : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          sx={{ maxWidth: 250, width: "100%", height: 250 }}
        />
      </div>
      <CardHeader
        action={
          isCurrentUser && (
            <IconButton onClick={() => navigate("/profile/edit")}>
              <FiEdit />
            </IconButton>
          )
        }
        title={
          user.firstName || user.lastName
            ? `${user.firstName || ""} ${user.lastName || ""}`
            : "NoName"
        }
        subheader={user.username}
      />
      <CardContent>
        <ProfileInfoList user={user} userReviewsLength={userReviewsLength} />
        {isLoggedIn && <ProfileActions user={user} />}
      </CardContent>
    </Card>
  );
}
