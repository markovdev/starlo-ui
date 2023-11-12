import React from "react";
import Heading from "../Typography/Heading";
import Item from "../List/Item/Item";
import List from "../List/List";

const OrdersBox = ({ orders, totalPrice }) => {
  return (
    <div className="orders-box">
      <Heading className="orders-box__heading u-center-text" isTertiary>
        Your orders:
      </Heading>
      <p className="paragraph u-center-text">
        <strong>Total orders:</strong> <span>{orders?.length}</span>
      </p>
      <List isCol>
        {orders?.map((book) => (
          <Item className="orders-box__item">
            <strong>{book.room.name}:</strong>{" "}
            <span>{`${book.room.price}$`}</span>
          </Item>
        ))}
      </List>
      <p className="orders-box__total">{totalPrice}$</p>
    </div>
  );
};

export default OrdersBox;
