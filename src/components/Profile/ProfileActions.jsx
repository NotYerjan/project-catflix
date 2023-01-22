import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import {
  FiKey,
  FiUserCheck,
  FiUserMinus,
  FiUserPlus,
  FiUserX,
} from "react-icons/fi";
import useUserStore from "../../store/storeUsers";

export default function ProfileActions({ user }) {
  const currentUser = useUserStore((state) => state.currentUser);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const createFriendRequest = useUserStore(
    (state) => state.createFriendRequest
  );
  const acceptFriendRequest = useUserStore(
    (state) => state.acceptFriendRequest
  );
  const declineFriendRequest = useUserStore(
    (state) => state.declineFriendRequest
  );
  const unfriend = useUserStore((state) => state.unfriend);
  const makeUserSuper = useUserStore((state) => state.makeUserSuper);

  const isCurrentUser = isLoggedIn && currentUser.id === user.id;
  const isFriend = !!user.friends?.find(
    ({ id, status }) => status === "friend" && id === currentUser?.id
  );
  const isRequested = !!user.friends?.find(
    ({ id, status }) => status === "requested" && id === currentUser?.id
  );
  const didCurrentUserRequest = !!currentUser.friends?.find(
    ({ id, status }) => status === "requested" && id === user.id
  );

  return (
    <>
      {!user.isSuperUser && currentUser.isSuperUser && (
        <Button
          fullWidth
          variant="contained"
          startIcon={<FiKey />}
          sx={{ mb: 1 }}
          onClick={() => makeUserSuper(user.id)}
        >
          Moderator Permission
        </Button>
      )}
      {!isFriend && isRequested && !isCurrentUser && (
        <ButtonGroup fullWidth variant="contained">
          <Button
            startIcon={<FiUserX />}
            color="error"
            onClick={() => declineFriendRequest(user.id)}
          >
            Decline
          </Button>
          <Button
            startIcon={<FiUserCheck />}
            color="success"
            onClick={() => acceptFriendRequest(user.id)}
          >
            Accept
          </Button>
        </ButtonGroup>
      )}
      {!isFriend && !isRequested && !isCurrentUser && (
        <Button
          fullWidth
          variant="outlined"
          disabled={didCurrentUserRequest}
          startIcon={<FiUserPlus />}
          onClick={() => createFriendRequest(user.id)}
        >
          Friendship Request
        </Button>
      )}
      {isFriend && (
        <Button
          fullWidth
          variant="outlined"
          startIcon={<FiUserMinus />}
          onClick={() => unfriend(user.id)}
        >
          Unfriend
        </Button>
      )}
    </>
  );
}
