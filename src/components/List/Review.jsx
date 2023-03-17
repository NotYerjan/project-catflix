import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiEdit, FiTrash } from "react-icons/fi";

import useReviewStore from "../../store/storeReview.js";
import useUserStore from "../../store/storeUsers.js";

import Avatar from "../Avatar/Avatar";
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

  const toggleEditReview = () => setIsEdited(!isEdited);

  const cancelEditing = () => {
    setNewRating(rating);
    toggleEditReview();
  };

  const handleUpdateReview = () => {
    updateReview(id, newContent, newRating);
    toggleEditReview();
  };

  return (
    <div className="review-card">
      <div className="review-card__header">
        <div className="review-card__avatar-container">
          <Avatar
            height={"3.5rem"}
            width={"3.5rem"}
            src={users.filter((user) => user.id === userId)[0].imgSrc}
          />
        </div>
        <div className="review-card__info">
          <p
            className="review-card__info-name"
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
                rating={newRating}
                setNewRating={setNewRating}
                onChange={(e, newValue) => setNewRating(newValue)}
              />
              <div>
                <Button
                  alt="Cancel"
                  variant="outlined"
                  onClick={cancelEditing}
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
            <Rating name="read-only" rating={newRating} readOnly />
          </>
        )}
      </div>
    </div>
  );
}
