import React from "react";
import { useParams } from "react-router-dom";
import UserActivity from "../components/Profile/UserActivity";
import UserInfo from "../components/Profile/UserInfo";
import useMuiTheme from "../hooks/useMuiTheme";
import useReviewStore from "../store/storeReview";
import useUserStore from "../store/storeUsers";

export default function Profile() {
  const { id } = useParams();
  const users = useUserStore((state) => state.users);
  const reviews = useReviewStore((state) => state.reviews);
  const user = users.find((user) => user.id === id);
  const userReviews = reviews.filter(({ userId }) => userId === id);
  const { StyledBox } = useMuiTheme();

  return (
    <StyledBox>
      <UserInfo user={user} userReviewsLength={userReviews.length} />
      <UserActivity user={user} userReviews={userReviews} />
    </StyledBox>
  );
}
