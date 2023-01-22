import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import {
  FiCalendar,
  FiClock,
  FiEdit3,
  FiMail,
  FiShield,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";
import useUserStore from "../../store/storeUsers";

export default function ProfileInfoList({ user, userReviewsLength }) {
  const currentUser = useUserStore((state) => state.currentUser);
  const birthday = user.birthday ? new Date(user.birthday) : "";
  const membership = new Date(user.createdAt);
  const isFriend = !!user.friends?.find(
    ({ id, status }) => status === "friend" && id === currentUser?.id
  );

  return (
    <List>
      {user.email && (
        <ListItem sx={{ px: 0 }}>
          <ListItemIcon>
            <FiMail size={24} />
          </ListItemIcon>
          <ListItemText primary={user.email} />
        </ListItem>
      )}
      {birthday && (
        <ListItem sx={{ px: 0 }}>
          <ListItemIcon>
            <FiCalendar size={24} />
          </ListItemIcon>
          <ListItemText
            primary={birthday?.toLocaleString("en-CA", {
              dateStyle: "medium",
            })}
          />
        </ListItem>
      )}
      <ListItem sx={{ px: 0 }}>
        <ListItemIcon>
          <FiUsers size={24} />
        </ListItemIcon>
        <ListItemText
          primary={`${
            user.friends?.filter(({ status }) => status === "friend").length ||
            0
          } friends`}
        />
      </ListItem>
      <ListItem sx={{ px: 0 }}>
        <ListItemIcon>
          <FiClock size={24} />
        </ListItemIcon>
        <ListItemText primary={`member since ${membership.getFullYear()}`} />
      </ListItem>
      <ListItem sx={{ px: 0 }}>
        <ListItemIcon>
          <FiEdit3 size={24} />
        </ListItemIcon>
        <ListItemText primary={`${userReviewsLength} reviews written`} />
      </ListItem>
      {user.isSuperUser && (
        <ListItem sx={{ px: 0 }}>
          <ListItemIcon>
            <FiShield size={24} />
          </ListItemIcon>
          <ListItemText primary="moderator" />
        </ListItem>
      )}
      {isFriend && (
        <ListItem sx={{ px: 0 }}>
          <ListItemIcon>
            <FiUserCheck size={24} />
          </ListItemIcon>
          <ListItemText primary="you are friends" />
        </ListItem>
      )}
    </List>
  );
}
