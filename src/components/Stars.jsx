import React, { useState } from "react";
import { LiaStar, LiaStarSolid } from "react-icons/lia";
import useHttp from "../hooks/http";
import Message from "./UI/Message/Message";
import ReviewForm from "./ReviewForm";
const Stars = ({ roomID, handler }) => {
  const { sendRequest, error, isLoading, data } = useHttp();
  const [rating, setRating] = useState(0);
  const [showReview, setShowReview] = useState(false);
  console.log(roomID);
  const handleRating = (num) => {
    setRating(num);
    setShowReview(!showReview);
    handler({ rating: num });
    // sendRequest(`/rooms/${roomID}/reviews`, "POST", true, {
    //   rating: num,
    // });
  };

  return (
    <>
      {error && (
        <Message text="You have a rating for this room already!" error />
      )}
      <div className="stars">
        {" "}
        {[1, 2, 3, 4, 5].map((i) => (
          <LiaStarSolid
            onClick={() => handleRating(i)}
            className={`stars__star  ${
              i <= rating ? "stars__star--fill" : "stars__star--empty"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default Stars;
