import React from "react";
import Section from "../Section/Section";
import Container from "../Containers/Container";
import Heading from "../Typography/Heading";
import { useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import useHttp from "../../hooks/http";
import Message from "../UI/Message/Message";

const Booking = ({ roomID, name }) => {
  const { sendRequest, error, status, isLoading } = useHttp();
  const bookRoomHandler = (e, roomId) => {
    e.preventDefault();
    sendRequest(`/users/${roomId}/booking`, "POST", true);
  };
  const { user } = useSelector((state) => state.auth);
  return (
    <Section className="section--no-border">
      {" "}
      {error ? (
        <Message text={"You have this room in your orders already!"} error />
      ) : null}
      {status ? <Message text="Room added to your bookings!" /> : null}
      <Container>
        <div className="book">
          <div className="book__text">
            <Heading
              className="book__heading u-center-text "
              isWhite
              isTertiary
            >{`Book ${name}`}</Heading>

            <p className="book__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              mollitia magnam veniam quo voluptates molestiae architecto
              cupiditate laborum fugiat minus! Provident aut temporibus sequi
              dolorum aliquid sapiente veniam omnis corrupti maxime blanditiis.
            </p>
            {!user?.token ? (
              <Button className="btn btn--white" disabled={!user?.token}>
                Login to book it
              </Button>
            ) : (
              <Button
                onClick={(e) => bookRoomHandler(e, roomID)}
                isLoading={isLoading}
                className="btn btn--white btn--form u-center-flex"
              >
                Book now!
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Booking;
