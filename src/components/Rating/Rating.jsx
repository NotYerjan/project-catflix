import React, { useEffect, useState } from "react";
import { FiStar } from "react-icons/fi";
import { BsStarFill } from "react-icons/bs";

import Button from "../Button/Button";
import "./Rating.css";

const Rating = ({ readOnly, rating, setNewRating = () => {} }) => {
  // An array to show how many filled and non-filled stars there are
  // Rating = 3 --> isStarFilled = [true, true, true, false, false]
  const [isStarFilled, setIsStarFilled] = useState(
    [...Array(5)].map((_, i) => (i < rating ? true : false))
  );

  // Check if the Rating is readonly we shouldn't change anything
  const handleRatingChange = (index) =>
    !readOnly &&
    setIsStarFilled(() =>
      isStarFilled.map((_, i) => (i <= index ? true : false))
    );

  // Update the new value of rating
  useEffect(() => setNewRating(isStarFilled.filter((star) => star).length));

  return (
    <div className={`${readOnly ? "rating" : "rating__edit"}`}>
      {isStarFilled.map((star, i) => (
        <Button
          icon={star ? BsStarFill : FiStar}
          variant="icon"
          small
          onClick={() => handleRatingChange(i)}
        />
      ))}
    </div>
  );
};

export default Rating;
