import React from "react";
import useReviewStore from "../../store/storeReview.js";
import { FiTrash, FiEdit, FiUser } from "react-icons/fi";
import "./review.css";

export default function Review(props) {
  const updateReview = useReviewStore((state) => state.updateReview);
  const deleteReview = useReviewStore((state) => state.deleteReview);
  const { id, name, src, date, content } = props.content;

  const handleDeleteReview = (e) => {
    deleteReview(id);
  };

  const handleEditReview = (e) => {
    console.log("review edited");
  };

  return (
    <div className="review">
      <div className="review__user">
        <div className="review__user-info">
          <div className="review__user-info__image">
            {src ? (
              <img src={`/public/user-images/${src}`} alt={`${name} Image`} />
            ) : (
              <FiUser className="review__user-info__icon" />
            )}
          </div>

          <div className="review__user-info__details">
            <h4>{name || `Unknown ${id}`}</h4>
          </div>
        </div>

        <div className="review__buttons">
          <button className="review__edit" onClick={handleEditReview}>
            <FiEdit />
          </button>

          <button className="review__delete" onClick={handleDeleteReview}>
            <FiTrash />
          </button>
        </div>
      </div>

      <div className="review__content">
        <p>{content}</p>
      </div>
    </div>
  );
}
