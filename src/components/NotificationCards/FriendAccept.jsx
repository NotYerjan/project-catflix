import { CardHeader } from "@mui/material";

export default function FriendAccept({ notification }) {
  return (
    <CardHeader
      action={
        !notification.isRead && (
          <Icon color="error">
            <FiAlertCircle />
          </Icon>
        )
      }
      title={`User ${notification.username} accepted your friend request`}
      titleTypographyProps={{ fontSize: 16 }}
      subheader={notification.createdAt}
      subheaderTypographyProps={{ fontSize: 12 }}
    />
  );
}
