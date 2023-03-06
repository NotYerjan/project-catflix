import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiEdit, FiTrash } from "react-icons/fi";

import useReviewStore from "../../store/storeReview.js";
import useUserStore from "../../store/storeUsers.js";

import Avatar from "../Avatar";
import Rating from "../Rating/Rating";

import Button from "../Button/Button";
import InputField from "../Input/InputField";

import "./review.css";

export default function Review(props) {
  const updateReview = useReviewStore((state) => state.updateReview);
  const deleteReview = useReviewStore((state) => state.deleteReview);

  const users = useUserStore((state) => state.users);
  const user = useUserStore((state) => state.currentUser);

  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  const { id, userId, createdAt, content, rating } = props.content;
  const navigate = useNavigate();

  const [isEdited, setIsEdited] = useState(false);
  const [newContent, setNewContent] = useState(content);
  const [newRating, setNewRating] = useState(rating);

  const toggleEditReview = (e) => setIsEdited(!isEdited);

  const handleUpdateReview = () => {
    updateReview(id, newContent, newRating);
    toggleEditReview();
  };

  return (
    <div className="review-card">
      <div className="review-card__header">
        <Avatar src={users.filter((user) => user.id === userId)[0].imgSrc} />
        <div className="review-card__info">
          <p
            onClick={() =>
              navigate(
                `/profile/${users.find((user) => user.id === userId).id}`
              )
            }
          >
            {users.find((user) => user.id === userId).username}
          </p>
          <p className="review-card__info-date">
            {createdAt.toLocaleString("en-CA", { dateStyle: "medium" })}
          </p>
        </div>
        {isLoggedIn && (userId == user.id || user.isSuperUser) && (
          <div className="review-card__options">
            <Button
              icon={FiEdit}
              variant="icon"
              onClick={toggleEditReview}
              small
            />
            <Button
              icon={FiTrash}
              variant="icon"
              onClick={() => deleteReview(id)}
              small
            />
            {/*    <FiEdit />
            </IconButton>
            <IconButton onClick={() => deleteReview(id)}>
              <FiTrash />
            </IconButton> */}
          </div>
        )}
      </div>
      <div className="review-card__content">
        {isEdited ? (
          <>
            <InputField
              label="TextArea"
              defaultValue={content}
              onChange={(e) => setNewContent(e.target.value)}
              multiline
            />
            <div className="review-card__edit">
              <Rating
                name="simple-controlled"
                value={newRating}
                onChange={(e, newValue) => setNewRating(newValue)}
              />
              <div>
                <Button
                  alt="Cancel"
                  variant="outlined"
                  onClick={toggleEditReview}
                  small
                />

                <Button
                  alt="Save"
                  variant="contained"
                  onClick={handleUpdateReview}
                  small
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <p>{content}</p>
            <Rating name="read-only" value={rating} readOnly />
          </>
        )}
      </div>
    </div>
    /*  <Card elevation={6}>
      {" "}
      <CardHeader
        avatar={
          <Avatar src={users.filter((user) => user.id === userId)[0].imgSrc} />
        }
        action={
          isLoggedIn &&
          (userId == user.id || user.isSuperUser) && (
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
        title={
          <Typography
            onClick={() =>
              navigate(
                `/profile/${users.find((user) => user.id === userId).id}`
              )
            }
            sx={{ cursor: "pointer" }}
          >
            {users.find((user) => user.id === userId).username}
          </Typography>
        }
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
    </Card> */
  );
}
