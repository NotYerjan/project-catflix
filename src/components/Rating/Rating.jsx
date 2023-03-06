import React, { useEffect, useState } from "react";
import { FiStar } from "react-icons/fi";
import { BsStarFill } from "react-icons/bs";

import Button from "../Button/Button";
import "./Rating.css";

const Rating = ({ readOnly, value }) => {
  const filledStars = Array(value);
  const nonFilledStars = Array(5 - value);

  const [isFilled, setIsFilled] = useState(() =>
    Array(5).fill(true, 0, value - 1)
  );

  const onHover = (e) => {
    console.log(e.target.class);
  };

  // useEffect(() => setIsFilled(isFilled.fill(true, 0, value - 1)), []);
  console.log(isFilled);

  return (
    <div className={`${readOnly ? "rating" : "rating__edit"}`}>
      {isFilled.map((filled) => (
        <Button icon={filled ? BsStarFill : FiStar} variant="icon" small />
      ))}
      {/*  {nonFilledStars.map((f) => (
        <Button icon={FiStar} variant="icon" small />
      ))} */}
      {/* {readOnly ? (
        <>
          {Array(filledStars).fill(
            <Button icon={BsStarFill} variant="icon" small />
          )}
          {Array(nonFilledStars).fill(
            <Button icon={FiStar} variant="icon" small />
          )}
        </>
      ) : (
        <>
          {Array(nonFilledStars).fill(
            <Button icon={FiStar} variant="icon" onMouseEnter={onHover} small />
          )}
        </>
      )} */}
    </div>
  );
};

export default Rating;
