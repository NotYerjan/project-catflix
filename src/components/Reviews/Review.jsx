import React from "react";
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
} from "@mui/material";

export default function Review(props) {
  const updateReview = useReviewStore((state) => state.updateReview);
  const deleteReview = useReviewStore((state) => state.deleteReview);
  const { id, userId, createdAt, content, score } = props.content;

  const handleDeleteReview = (e) => {
    deleteReview(id);
  };

  const handleEditReview = (e) => {
    console.log("review edited");
  };

  return (
    <Card elevation={6}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "black" }}>{userId}</Avatar>}
        action={
          <Box>
            <IconButton onClick={handleEditReview}>
              <FiEdit />
            </IconButton>
            <IconButton onClick={handleDeleteReview}>
              <FiTrash />
            </IconButton>
          </Box>
        }
        title={userId}
        subheader={createdAt}
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          Score: {score}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
