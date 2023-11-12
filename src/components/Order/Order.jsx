import React from "react";
import Heading from "../Typography/Heading";

import { FULL_PATH } from "../../config";
import useHttp from "../../hooks/http";
const Order = ({ name, price, photo, orderId, roomId, cb }) => {
  const { sendRequest } = useHttp();

  // const deleteOrderHandler = useCallback(() => {
  //   sendRequest(`/booking/${id}`, "DELETE", true);
  // }, []);

  return (
    <div className="order">
      <img
        src={`${FULL_PATH}/img/rooms/${photo}`}
        alt={`${name} photo on Starlo`}
        className="order__photo"
      />

      <div className="order__text">
        <Heading isTertiary>{`${name} room`} </Heading>
        <p className="order__price">{`${price}$`}</p>
        <button className="order__close" onClick={() => cb(roomId, orderId)}>
          <span className="order__icon">&nbsp;</span>
        </button>
      </div>
    </div>
  );
};

export default Order;
