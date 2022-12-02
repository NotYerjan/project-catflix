import React from "react";
import useReviewStore from "../../store/storeReview.js";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import "./review.css";

export default function Review(props) {
  const updateReview = useReviewStore((state) => state.updateReview);
  const deleteReview = useReviewStore((state) => state.deleteReview);
  const { id, name, date, content } = props.content;

  const handleDeleteReview = (e) => {
    deleteReview(id);
  };

  const handleEditReview = (e) => {
    console.log("review edited");
  };

  return (
    <div className="review">
      <div className="review__user-info">
        <div className="review__user-info__image">
          <img />
        </div>

        <div className="review__user-info__details">
          <h4>{name}</h4>
          <p>{date}</p>
        </div>
      </div>

      <div className="review__content">
        <p>{content}</p>
      </div>

      <div className="review__buttons">
        <button className="review__edit" onClick={handleEditReview}>
          <AiFillEdit />
        </button>

        <button className="review__delete" onClick={handleDeleteReview}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}
