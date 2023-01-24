import { CardHeader, Icon } from "@mui/material";
import { FiAlertCircle } from "react-icons/fi";

export default function FriendRequest({ notification }) {
  return (
    <CardHeader
      action={
        !notification.isRead && (
          <Icon color="error">
            <FiAlertCircle />
          </Icon>
        )
      }
      title={`User ${notification.username} wants to be a friend`}
      titleTypographyProps={{ fontSize: 16 }}
      subheader={notification.createdAt}
      subheaderTypographyProps={{ fontSize: 12 }}
    />
  );
}
