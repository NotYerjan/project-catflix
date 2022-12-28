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
} from "@mui/material";

export default function Review(props) {
  const updateReview = useReviewStore((state) => state.updateReview);
  const deleteReview = useReviewStore((state) => state.deleteReview);
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
        avatar={
          <Avatar sx={{ bgcolor: "inherit" }}>
            <FiUser
              style={{
                fontSize: "2.5rem",
                color: "white",
                border: "1px solid white",
                borderRadius: "2rem",
                padding: "0.2rem",
              }}
            />
          </Avatar>
        }
        action={
          <Box>
            <IconButton onClick={toggleEditReview}>
              <FiEdit />
            </IconButton>

            <IconButton onClick={() => deleteReview(id)}>
              <FiTrash />
            </IconButton>
          </Box>
        }
        title={userId}
        subheader={createdAt}
      />

      <CardContent>
        {isEdited ? (
          <>
            <Rating
              name="simple-controlled"
              value={newRating}
              onChange={(e) => setNewRating(e.target.value)}
            />
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
                endAdornment: (
                  <Button variant="contained" onClick={handleUpdateReview}>
                    Save
                  </Button>
                ),
              }}
            />
          </>
        ) : (
          <>
            <Rating name="read-only" value={rating} readOnly />
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
}
