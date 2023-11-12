import React, { useEffect } from "react";
import useHttp from "../../hooks/http";
import Review from "./Review";
import Section from "../Section/Section";
import Container from "../Containers/Container";
import { useSelector } from "react-redux";
import Heading from "../Typography/Heading";
import Message from "../UI/Message/Message";

const Reviews = ({ roomID }) => {
  const { review } = useSelector((state) => state);
  console.log(roomID);
  const { sendRequest, status, error, isLoading, data } = useHttp();

  useEffect(() => {
    console.log("-----------------", roomID, "--------------------");
    sendRequest(`/reviews/${roomID}`, "GET", true);
  }, [review]);
  console.log(data);
  return (
    <Section isReset>
      {error && <Message text={error?.response.data.message} error />}
      <Container>
        {data?.data.length > 0 ? (
          <div className="reviews">
            {data?.data.map((review, i) => (
              <Review
                key={review._id}
                photo={review.user.photo}
                name={review.user.name}
                review={review.review}
                rating={review.rating}
                id={i}
              />
            ))}
          </div>
        ) : (
          <Heading isTertiary>This room has no reviews!</Heading>
        )}
      </Container>
    </Section>
  );
};

export default Reviews;
