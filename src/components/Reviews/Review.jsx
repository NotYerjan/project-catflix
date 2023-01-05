import React, { useState } from "react";
import useReviewStore from "../../store/storeReview.js";
import { FiTrash, FiEdit, FiUser } from "react-icons/fi";
import {
  Card,
  CardHeader,
  Avatar,
  Box,
  IconButton,
  CardContent,
  Typography,
  Button,
  TextField,
  Rating,
  CardActions,
  ButtonGroup,
} from "@mui/material";
import useUserStore from "../../store/storeUsers.js";

export default function Review(props) {
  const updateReview = useReviewStore((state) => state.updateReview);
  const deleteReview = useReviewStore((state) => state.deleteReview);
  const users = useUserStore((state) => state.users);
  const user = useUserStore((state) => state.currentUser);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const { id, userId, createdAt, content, rating } = props.content;

  const [isEdited, setIsEdited] = useState(false);
  const [newContent, setNewContent] = useState(content);
  const [newRating, setNewRating] = useState(rating);

  const toggleEditReview = () => setIsEdited(!isEdited);

  const handleUpdateReview = () => {
    updateReview(id, newContent, newRating);
    toggleEditReview();
  };

  return (
    <Card elevation={6}>
      <CardHeader
        avatar={<Avatar />}
        action={
          isLoggedIn &&
          userId == user.id && (
            <Box>
              <IconButton onClick={toggleEditReview}>
                <FiEdit />
              </IconButton>
              <IconButton onClick={() => deleteReview(id)}>
                <FiTrash />
              </IconButton>
            </Box>
          )
        }
        title={users.find((user) => user.id === userId).username}
        subheader={createdAt.toLocaleString("en-CA", { dateStyle: "medium" })}
      />

      {isEdited ? (
        <>
          <CardContent>
            <TextField
              multiline
              defaultValue={content}
              onChange={(e) => setNewContent(e.target.value)}
              sx={{
                width: "100%",
                height: "auto",
              }}
              InputProps={{
                sx: {
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                },
              }}
            />
          </CardContent>{" "}
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 2,
              pt: 0,
            }}
          >
            <Rating
              name="simple-controlled"
              value={newRating}
              onChange={(e, newValue) => setNewRating(newValue)}
            />
            <ButtonGroup>
              <Button variant="outlined" onClick={toggleEditReview}>
                Cancel
              </Button>
              <Button variant="contained" onClick={handleUpdateReview}>
                Save
              </Button>
            </ButtonGroup>
          </CardActions>{" "}
        </>
      ) : (
        <>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>{" "}
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 2,
              pt: 0,
            }}
          >
            <Rating name="read-only" value={rating} readOnly />
          </CardActions>
        </>
      )}
    </Card>
  );
}
