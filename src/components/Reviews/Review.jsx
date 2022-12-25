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
} from "@mui/material";

export default function Review(props) {
  const updateReview = useReviewStore((state) => state.updateReview);
  const deleteReview = useReviewStore((state) => state.deleteReview);
  const { id, userId, createdAt, content, score } = props.content;

  const [isEdited, setIsEdited] = useState(false);
  const [newContent, setNewContent] = useState(content);

  const toggleEditReview = () => setIsEdited(!isEdited);

  const handleUpdateReview = () => {
    updateReview(id, newContent);
    toggleEditReview();
  };

  return (
    <Card elevation={6}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "white" }}>
            <FiUser />
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
        <Typography variant="body1" color="text.secondary">
          Score: {score}
        </Typography>

        {isEdited ? (
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
        ) : (
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
