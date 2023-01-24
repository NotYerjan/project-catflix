import {
  Badge,
  Card,
  CardActionArea,
  IconButton,
  Paper,
  Popover,
} from "@mui/material";
import { useState } from "react";
import { FiBell } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/storeUsers";
import FriendAccept from "../NotificationCards/FriendAccept";
import FriendDecline from "../NotificationCards/FriendDecline";
import FriendRequest from "../NotificationCards/FriendRequest";
import ModeratorAccess from "../NotificationCards/ModeratorAccess";

export default function NotificationBar() {
  const [anchorElNotification, setAnchorElNotification] = useState(null);
  const navigate = useNavigate();
  const user = useUserStore((state) => state.currentUser);
  const makeAllNotificationsRead = useUserStore(
    (state) => state.makeAllNotificationsRead
  );
  const notifications = user.notifications || [];
  const newNotifications = notifications.filter(({ isRead }) => !isRead);

  const handleClickNotification = (event) => {
    setAnchorElNotification(event.currentTarget);
  };
  const handleCloseNotification = () => {
    makeAllNotificationsRead();
    setAnchorElNotification(null);
  };
  const handleCardClick = (id) => {
    handleCloseNotification();
    navigate(`/profile/${id}`);
  };

  const openNotification = Boolean(anchorElNotification);
  const idNotification = openNotification ? "notification-bar" : undefined;

  return (
    <>
      <IconButton
        aria-describedby={idNotification}
        onClick={handleClickNotification}
        size="large"
        color="inherit"
      >
        <Badge badgeContent={newNotifications.length} color="error">
          <FiBell />
        </Badge>
      </IconButton>
      <Popover
        id={idNotification}
        open={openNotification}
        anchorEl={anchorElNotification}
        onClose={handleCloseNotification}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            padding: 1,
            width: 400,
            maxWidth: "90vw",
            height: 500,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {notifications?.map((notification, i) => (
            <Card
              onClick={() => handleCardClick(notification.createdBy)}
              key={i}
            >
              <CardActionArea>
                {notification.type === "friend_request" && (
                  <FriendRequest notification={notification} />
                )}
                {notification.type === "friend_accept" && (
                  <FriendAccept notification={notification} />
                )}
                {notification.type === "friend_decline" && (
                  <FriendDecline notification={notification} />
                )}
                {notification.type === "moderator_access" && (
                  <ModeratorAccess notification={notification} />
                )}
              </CardActionArea>
            </Card>
          ))}
        </Paper>
      </Popover>
    </>
  );
}
