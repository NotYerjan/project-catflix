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
import ProfileInfo from "../List/ProfileInfo";

export default function ProfileInfoList({ user, userReviewsLength }) {
  const currentUser = useUserStore((state) => state.currentUser);
  const birthday = user.birthday || "";
  const membership = new Date(user.createdAt);
  const isFriend = !!user.friends?.find(
    ({ id, status }) => status === "friend" && id === currentUser?.id
  );
  const friendsNo =
    user.friends?.filter(({ status }) => status === "friend").length || 0;

  return (
    <List>
      {user.email && <ProfileInfo Icon={FiMail} text={user.email} />}
      {birthday && <ProfileInfo Icon={FiCalendar} text={birthday} />}
      <ProfileInfo Icon={FiUsers} text={`${friendsNo} Friends`} />
      <ProfileInfo
        Icon={FiClock}
        text={`Member since ${membership.getFullYear()}`}
      />
      <ProfileInfo
        Icon={FiEdit3}
        text={`${userReviewsLength} Reviews written`}
      />
      {user.isSuperUser && <ProfileInfo Icon={FiShield} text="Moderator" />}
      {isFriend && <ProfileInfo Icon={FiUserCheck} text="You are friends" />}
    </List>
  );
}
