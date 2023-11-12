import React, { useCallback, useEffect, useState } from "react";
import Container from "../components/Containers/Container";
import Section from "../components/Section/Section";
import Heading from "../components/Typography/Heading";
import useHttp from "../hooks/http";
import { useSelector } from "react-redux";
import NewOrders from "../components/NewOrders/NewOrders";
import OrdersBox from "../components/OrdersBox/OrdersBox";

const Orders = () => {
  const { user } = useSelector((state) => state.auth);
  const { sendRequest, data, error, status } = useHttp();
  const {
    sendRequest: deleteOrder,
    data: deletedData,
    error: deleteError,
  } = useHttp();
  const [totalPrice, setTotalPrice] = useState(0);
  const deleteOrderHandler = useCallback((roomId, orderId) => {
    deleteOrder(`/users/${roomId}/booking/${orderId}`, "DELETE", true);
  }, []);

  useEffect(() => {
    sendRequest(`/booking`, "GET", true);
  }, [deletedData]);
  useEffect(() => {
    let sum = 0;

    data?.data.docs.map((room) => (sum += room.room.price));

    setTotalPrice(sum);
  }, [data]);
  return (
    <Section>
      {!user?.token ? (
        <Heading className="u-center-text" isTertiary>
          You must login to see your bookings!
        </Heading>
      ) : (
        <Container className="u-flex ">
          <NewOrders orders={data?.data.docs} handler={deleteOrderHandler} />

          <OrdersBox totalPrice={totalPrice} orders={data?.data.docs} />
        </Container>
      )}
    </Section>
  );
};

export default Orders;
