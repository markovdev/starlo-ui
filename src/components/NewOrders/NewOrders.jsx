import React from "react";
import Order from "../Order/Order";
import Heading from "../Typography/Heading";

const NewOrders = ({ orders, handler }) => {
  if (orders?.length === 0) {
    return <Heading isTertiary>There is no bookings at the moment</Heading>;
  } else
    return (
      <div className="u-flex u-flex--col">
        {orders?.map((order) => (
          <Order
            name={order.room.name}
            price={order.room.price}
            photo={order.room.cover}
            cb={handler}
            orderId={order._id}
            roomId={order.room._id}
          />
        ))}
      </div>
    );
};

export default NewOrders;
